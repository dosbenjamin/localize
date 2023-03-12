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
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id"),
  "dictionary_id" UUID NOT NULL REFERENCES "public"."dictionaries"("id") ON DELETE CASCADE,
  "iso" VARCHAR NOT NULL,
  "name" VARCHAR NOT NULL
);

CREATE FUNCTION "public"."create_dictionary"("name" VARCHAR, "project_id" UUID, "languages" "public"."language"[])
  RETURNS SETOF "public"."languages"
  LANGUAGE PLPGSQL
  SECURITY DEFINER
AS $$
  DECLARE
    "new_dictionary_id" UUID;
  BEGIN
    INSERT INTO "public"."dictionaries"("name", "project_id")
    VALUES ("create_dictionary"."name", "create_dictionary"."project_id")
    RETURNING "id" INTO "new_dictionary_id";

    INSERT INTO "public"."languages"("project_id", "dictionary_id", "iso", "name")
    SELECT "relations"."project_id", "relations"."dictionary_id", "language"."iso", "language"."name"
    FROM (VALUES ("create_dictionary"."project_id", "new_dictionary_id")) AS "relations"("project_id", "dictionary_id")
    JOIN UNNEST("create_dictionary"."languages") AS "language" ON TRUE;

    RETURN QUERY SELECT * FROM "public"."languages" WHERE "languages"."dictionary_id" = "new_dictionary_id";
  END
$$;
