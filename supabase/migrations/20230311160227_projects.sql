CREATE TYPE public.AFFILIATE_ROLE AS ENUM ('Administrator', 'Editor', 'Contributor');

CREATE TABLE public.projects (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "title" VARCHAR NOT NULL
);

CREATE TABLE public.affiliates (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "profile_id" UUID NOT NULL REFERENCES public.profiles(id),
  "project_id" UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  "role" public.AFFILIATE_ROLE NOT NULL DEFAULT 'Contributor'::public.AFFILIATE_ROLE
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users only"
ON public.projects
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED;

CREATE POLICY "Enable select for authenticated users only and project affiliates"
ON public.projects
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM public.affiliates
    WHERE auth.uid() = profile_id
  )
);

CREATE POLICY "Enable delete for authenticated users only and project affiliates"
ON public.projects
AS PERMISSIVE
FOR DELETE
TO AUTHENTICATED
USING (
  EXISTS (
    SELECT * FROM public.affiliates
    WHERE auth.uid() = profile_id AND role = 'Administrator'::public.AFFILIATE_ROLE
  )
);

CREATE POLICY "Enable insert for authenticated users only"
ON public.affiliates
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED;

CREATE POLICY "Enable select for authenticated users only and project affiliates"
ON public.affiliates
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED
USING (auth.uid() = profile_id);

CREATE POLICY "Enable delete for authenticated users only and project affiliates"
ON public.affiliates
AS PERMISSIVE
FOR DELETE
TO AUTHENTICATED
USING (auth.uid() = profile_id AND role = 'Administrator'::public.AFFILIATE_ROLE);

CREATE FUNCTION public.create_project(title VARCHAR)
  RETURNS SETOF public.projects
  LANGUAGE plpgsql
  SECURITY DEFINER
AS $$
  DECLARE
    "project_id" UUID;
  BEGIN
    INSERT INTO public.projects(title)
    VALUES (create_project.title)
    RETURNING id INTO project_id;

    INSERT INTO public.affiliates(profile_id, project_id, role)
    VALUES (auth.uid(), project_id, 'Administrator'::public.AFFILIATE_ROLE);

    RETURN QUERY SELECT * FROM public.projects WHERE projects.id = project_id;
  END
$$;
