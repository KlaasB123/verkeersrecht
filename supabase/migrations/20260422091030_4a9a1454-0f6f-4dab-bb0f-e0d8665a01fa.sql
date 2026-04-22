-- Create user roles infrastructure for admin-only access to submissions
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role app_role not null,
  created_at timestamp with time zone not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Admins can view all roles"
on public.user_roles for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Summon submissions table
create table public.summon_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  insurance_company text not null,
  policy_number text not null,
  vehicle_brand text not null,
  license_plate text not null,
  upload_method text not null,
  document_url text,
  rolnummer text,
  rechtbank text,
  datum_zitting date,
  created_at timestamp with time zone not null default now()
);

alter table public.summon_submissions enable row level security;

-- Anyone can submit the form (public website)
create policy "Anyone can submit a dagvaarding"
on public.summon_submissions for insert
to anon, authenticated
with check (true);

-- Only admins can read submissions
create policy "Only admins can view submissions"
on public.summon_submissions for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can update submissions"
on public.summon_submissions for update
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can delete submissions"
on public.summon_submissions for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Storage bucket for uploaded dagvaarding documents (private)
insert into storage.buckets (id, name, public)
values ('summon-documents', 'summon-documents', false)
on conflict (id) do nothing;

-- Anyone can upload a file (form submission)
create policy "Anyone can upload dagvaarding files"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'summon-documents');

-- Only admins can read uploaded files
create policy "Only admins can read dagvaarding files"
on storage.objects for select
to authenticated
using (bucket_id = 'summon-documents' and public.has_role(auth.uid(), 'admin'));
