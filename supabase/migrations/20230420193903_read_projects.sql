CREATE VIEW "public"."current_user_projects" WITH (SECURITY_INVOKER) AS (
  SELECT
    "projects".*,
    "current_affiliate"."role",
    JSON_AGG("affiliates") AS "affiliates",
    COALESCE(
      JSON_AGG("dictionaries") FILTER (WHERE "dictionaries"."id" IS NOT NULL),
      '[]'::JSON
    ) AS "dictionaries"
  FROM "public"."projects" AS "projects"
  LEFT JOIN (
    SELECT "dictionaries".*, JSON_AGG("languages") "languages"
    FROM "public"."dictionaries" AS "dictionaries"
    LEFT JOIN "public"."languages" AS "languages" ON "languages"."dictionary_id" = "dictionaries"."id"
    GROUP BY "dictionaries"."id"
  ) AS "dictionaries" ON "dictionaries"."project_id" = "projects"."id"
  LEFT JOIN "public"."affiliates" AS "affiliates" ON "affiliates"."project_id" = "projects"."id"
  LEFT JOIN "affiliates" AS "current_affiliate" ON "current_affiliate"."profile_id" = "auth"."uid"()
  GROUP BY "projects"."id", "current_affiliate"."role"
);
