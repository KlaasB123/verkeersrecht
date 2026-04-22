-- Allow anyone (including anonymous visitors) to upload files to the
-- summon-documents bucket. Reading remains restricted (no SELECT policy
-- for anon/authenticated), so files are only accessible via signed URLs
-- generated server-side or by admins via the service role.
CREATE POLICY "Anyone can upload a summon document"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'summon-documents');