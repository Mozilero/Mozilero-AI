-- MOZILERO AI: Phase 1 identity and workspace foundation.
create extension if not exists pgcrypto;
create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text, avatar_url text,
  account_type text not null default 'free' check (account_type in ('free','basic','pro','business')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.ai_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled project',
  project_type text not null default 'general',
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index if not exists ai_projects_user_updated_idx on public.ai_projects(user_id, updated_at desc);
alter table public.user_profiles enable row level security;
alter table public.ai_projects enable row level security;
create policy "Users can view their own profile" on public.user_profiles for select using (auth.uid() = id);
create policy "Users can insert their own profile" on public.user_profiles for insert with check (auth.uid() = id);
create policy "Users can update their own profile" on public.user_profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users can view their own projects" on public.ai_projects for select using (auth.uid() = user_id);
create policy "Users can create their own projects" on public.ai_projects for insert with check (auth.uid() = user_id);
create policy "Users can update their own projects" on public.ai_projects for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can delete their own projects" on public.ai_projects for delete using (auth.uid() = user_id);
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.user_profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
