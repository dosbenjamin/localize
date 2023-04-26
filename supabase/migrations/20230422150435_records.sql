CREATE TABLE "public"."keys" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "key" VARCHAR NOT NULL,
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id") ON DELETE CASCADE,
  "dictionary_id" UUID NOT NULL REFERENCES "public"."dictionaries"("id") ON DELETE CASCADE
);

CREATE TABLE "public"."translations" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "value" VARCHAR,
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id") ON DELETE CASCADE,
  "language_id" UUID NOT NULL REFERENCES "public"."languages"("id") ON DELETE CASCADE,
  "record_id" UUID NOT NULL REFERENCES "public"."keys"("id") ON DELETE CASCADE,
  "dictionary_id" UUID NOT NULL REFERENCES "public"."dictionaries"("id") ON DELETE CASCADE
);

ALTER TABLE "public"."keys" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."translations" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users and affiliates only"
ON "public"."keys"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"() AND "affiliates"."role" = 'Editor'::"public"."affiliate_role"
  )
);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."keys"
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
ON "public"."translations"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"()
  )
);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."translations"
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM "public"."affiliates" AS "affiliates"
    WHERE "affiliates"."project_id" = "project_id" AND "affiliates"."profile_id" = "auth"."uid"()
  )
);
