
-- 1. Tighten summon_submissions INSERT policy (replace WITH CHECK true)
DROP POLICY IF EXISTS "Anyone can submit a dagvaarding" ON public.summon_submissions;
CREATE POLICY "Anyone can submit a dagvaarding"
ON public.summon_submissions
FOR INSERT
WITH CHECK (
  email IS NOT NULL AND length(email) BETWEEN 3 AND 320
  AND name IS NOT NULL AND length(name) BETWEEN 1 AND 200
  AND license_plate IS NOT NULL AND length(license_plate) <= 20
  AND policy_number IS NOT NULL AND length(policy_number) <= 100
  AND insurance_company IS NOT NULL AND length(insurance_company) <= 200
  AND vehicle_brand IS NOT NULL AND length(vehicle_brand) <= 100
  AND (phone IS NULL OR length(phone) <= 50)
  AND (rechtbank IS NULL OR length(rechtbank) <= 200)
  AND (rolnummer IS NULL OR length(rolnummer) <= 100)
  AND upload_method IN ('file','email','later')
);

-- 2. Tighten storage upload policies for summon-documents
DROP POLICY IF EXISTS "Anyone can upload a summon document" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload dagvaarding files" ON storage.objects;
CREATE POLICY "Anyone can upload a summon document"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'summon-documents'
  AND (storage.foldername(name))[1] = 'submissions'
  AND lower(right(name, 4)) IN ('.pdf','.jpg','.png','.jpeg','.heic','.webp','.tiff','.tif','.doc','.docx')
  AND octet_length(coalesce(name,'')) <= 512
);

-- 3. user_roles: explicit deny of client writes (only service_role can manage)
CREATE POLICY "Only service role can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated, anon
WITH CHECK (false);
CREATE POLICY "Only service role can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated, anon
USING (false) WITH CHECK (false);
CREATE POLICY "Only service role can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated, anon
USING (false);

-- 4. Revoke execute on backend-only SECURITY DEFINER functions from anon/authenticated
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.email_queue_dispatch() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.email_queue_wake() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.email_queue_dispatch() TO service_role;
GRANT EXECUTE ON FUNCTION public.email_queue_wake() TO service_role;

-- 5. Set fixed search_path on functions that lack it
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public;
