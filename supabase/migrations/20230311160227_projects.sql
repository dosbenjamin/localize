CREATE TYPE "public"."affiliate_role" AS ENUM ('Administrator', 'Editor', 'Contributor');

CREATE TABLE "public"."projects" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "title" VARCHAR NOT NULL
);

CREATE TABLE "public"."affiliates" (
  "id" UUID NOT NULL DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "profile_id" UUID NOT NULL REFERENCES "public"."profiles"("id"),
  "project_id" UUID NOT NULL REFERENCES "public"."projects"("id") ON DELETE CASCADE,
  "role" "public"."affiliate_role" NOT NULL DEFAULT 'Contributor'::"public"."affiliate_role"
);

ALTER TABLE "public"."projects" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."affiliates" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users only"
ON "public"."projects"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (TRUE);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."projects"
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM "public"."affiliates"
    WHERE "auth"."uid"() = "profile_id"
  )
);

CREATE POLICY "Enable delete for authenticated users and affiliates only"
ON "public"."projects"
AS PERMISSIVE
FOR DELETE
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM "public"."affiliates"
    WHERE "auth"."uid"() = "profile_id" AND "role" = 'Administrator'::"public"."affiliate_role"
  )
);

CREATE POLICY "Enable insert for authenticated users only"
ON "public"."affiliates"
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (TRUE);

CREATE POLICY "Enable select for authenticated users and affiliates only"
ON "public"."affiliates"
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING ("auth"."uid"() = "profile_id");

CREATE POLICY "Enable delete for authenticated users and affiliates only"
ON "public"."affiliates"
AS PERMISSIVE
FOR DELETE
TO AUTHENTICATED
USING ("auth"."uid"() = "profile_id" AND "role" = 'Administrator'::"public"."affiliate_role");

CREATE FUNCTION "public"."create_project"("title" VARCHAR)
  RETURNS VOID
  LANGUAGE PLPGSQL
  SECURITY INVOKER
AS $$
  DECLARE
    "project_id" UUID DEFAULT UUID_GENERATE_V4();
  BEGIN
    INSERT INTO "public"."projects"("id", "title")
    VALUES ("project_id", "create_project"."title");

    INSERT INTO "public"."affiliates"("profile_id", "project_id", "role")
    VALUES ("auth"."uid"(), "project_id", 'Administrator'::"public"."affiliate_role");
  END
$$;
