CREATE VIEW "public"."current_user_projects" WITH (SECURITY_INVOKER) AS (
  SELECT "projects".*, "affiliates"."role"
  FROM "public"."projects" AS "projects"
  LEFT JOIN "affiliates" AS "affiliates" ON "affiliates"."profile_id" = "auth"."uid"() AND "affiliates"."project_id" = "projects"."id"
);
