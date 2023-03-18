CREATE TYPE "public"."language" AS (
  "iso" VARCHAR,
  "name" VARCHAR
);

CREATE TABLE "public"."dictionaries" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "name" VARCHAR NOT NULL,
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id") ON DELETE CASCADE
);

CREATE TABLE "public"."languages" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id") ON DELETE CASCADE,
  "dictionary_id" UUID NOT NULL REFERENCES "public"."dictionaries"("id") ON DELETE CASCADE,
  "iso" VARCHAR NOT NULL,
  "name" VARCHAR NOT NULL
);

ALTER TABLE "public"."dictionaries" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."languages" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users and affiliates only"
ON "public"."dictionaries"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"() AND "affiliates"."role" = 'Administrator'::"public"."affiliate_role"
  )
);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."dictionaries"
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"()
  )
);

CREATE POLICY "Enable insert for authenticated users and affiliates only"
ON "public"."languages"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"() AND "affiliates"."role" = 'Administrator'::"public"."affiliate_role"
  )
);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."languages"
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"()
  )
);

CREATE FUNCTION "public"."create_dictionary"("name" VARCHAR, "project_id" UUID, "languages" "public"."language"[])
  RETURNS VOID
  LANGUAGE PLPGSQL
  SECURITY INVOKER
AS $$
  DECLARE
    "dictionary_id" UUID DEFAULT UUID_GENERATE_V4();
  BEGIN
    INSERT INTO "public"."dictionaries"("id", "name", "project_id")
    VALUES ("dictionary_id", "create_dictionary"."name", "create_dictionary"."project_id");

    INSERT INTO "public"."languages"("project_id", "dictionary_id", "iso", "name")
    SELECT "relations"."project_id", "relations"."dictionary_id", "language"."iso", "language"."name"
    FROM (VALUES ("create_dictionary"."project_id", "dictionary_id")) AS "relations"("project_id", "dictionary_id")
    JOIN UNNEST("create_dictionary"."languages") AS "language" ON TRUE;
  END
$$;
