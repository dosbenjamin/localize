CREATE TABLE public.profiles (
  "id" UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "email_address" VARCHAR NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated user's profile"
ON public.profiles
AS PERMISSIVE
FOR INSERT
TO AUTHENTICATED
WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable update for authenticated user's profile"
ON public.profiles
AS PERMISSIVE
FOR UPDATE
TO AUTHENTICATED
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable select for authenticated users"
ON public.profiles
AS PERMISSIVE
FOR SELECT
TO AUTHENTICATED;

CREATE FUNCTION public.create_profile_for_user()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
AS $$
  BEGIN
    INSERT INTO public.profiles (id, email_address)
    VALUES (NEW.id, NEW.email);
    RETURN NEW;
  END
$$;

CREATE TRIGGER create_user_profile_on_sign_up
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION create_profile_for_user();
