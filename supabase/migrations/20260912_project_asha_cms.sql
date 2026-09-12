-- Project A.S.H.A. CMS and admin access. Run with the Supabase CLI or SQL Editor.
create type public.cms_status as enum ('published', 'draft');
create type public.admin_role as enum ('admin', 'editor');
create type public.article_kind as enum ('blog', 'press');

create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role public.admin_role not null default 'editor',
  created_at timestamptz not null default now()
);
create table public.media_assets (
  id uuid primary key default gen_random_uuid(), bucket text not null default 'public-media', storage_path text not null unique, file_name text not null, mime_type text, size_bytes bigint,
  alt_text text, created_at timestamptz not null default now(), created_by uuid references auth.users(id)
);
create table public.site_settings (
  key text primary key, value jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.page_sections (
  id uuid primary key default gen_random_uuid(), page_slug text not null, section_key text not null, title text, content jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id),
  unique(page_slug, section_key)
);
create table public.chapters (
  id uuid primary key default gen_random_uuid(), slug text not null unique, city text not null, state text not null, country text, lead_name text not null, summary text not null default '',
  image_asset_id uuid references public.media_assets(id) on delete set null, image_url text, instagram_url text, events jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.team_members (
  id uuid primary key default gen_random_uuid(), name text not null, role text not null, group_name text not null, bio text not null default '', chapter_id uuid references public.chapters(id) on delete set null,
  portrait_asset_id uuid references public.media_assets(id) on delete set null, portrait_url text, sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.events (
  id uuid primary key default gen_random_uuid(), title text not null, caption text not null default '', location text, event_date date, image_asset_id uuid references public.media_assets(id) on delete set null, image_url text,
  is_highlight boolean not null default false, sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.resources (
  id uuid primary key default gen_random_uuid(), title text not null, description text not null default '', asset_id uuid references public.media_assets(id) on delete set null, external_url text,
  sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.articles (
  id uuid primary key default gen_random_uuid(), kind public.article_kind not null, title text not null, publisher text not null default '', excerpt text not null default '', published_date text,
  external_url text not null, image_asset_id uuid references public.media_assets(id) on delete set null, image_url text, sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.partners (
  id uuid primary key default gen_random_uuid(), name text not null, subtitle text, description text not null default '', external_url text, sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.faqs (
  id uuid primary key default gen_random_uuid(), page_slug text not null default '/get-involved', question text not null, answer text not null, sort_order integer not null default 0, status public.cms_status not null default 'published', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), updated_by uuid references auth.users(id)
);
create table public.content_activity (
  id uuid primary key default gen_random_uuid(), actor_id uuid references auth.users(id), action text not null, content_type text not null, content_id text, summary text not null, created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security; alter table public.media_assets enable row level security; alter table public.site_settings enable row level security; alter table public.page_sections enable row level security; alter table public.chapters enable row level security; alter table public.team_members enable row level security; alter table public.events enable row level security; alter table public.resources enable row level security; alter table public.articles enable row level security; alter table public.partners enable row level security; alter table public.faqs enable row level security; alter table public.content_activity enable row level security;

create function public.is_admin_user() returns boolean language sql stable security definer set search_path = public as $$ select exists (select 1 from public.admin_users where user_id = auth.uid()) $$;
create function public.touch_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); new.updated_by = auth.uid(); return new; end; $$;
create trigger site_settings_touch before update on public.site_settings for each row execute function public.touch_updated_at();
create trigger page_sections_touch before update on public.page_sections for each row execute function public.touch_updated_at();
create trigger chapters_touch before update on public.chapters for each row execute function public.touch_updated_at();
create trigger team_members_touch before update on public.team_members for each row execute function public.touch_updated_at();
create trigger events_touch before update on public.events for each row execute function public.touch_updated_at();
create trigger resources_touch before update on public.resources for each row execute function public.touch_updated_at();
create trigger articles_touch before update on public.articles for each row execute function public.touch_updated_at();
create trigger partners_touch before update on public.partners for each row execute function public.touch_updated_at();
create trigger faqs_touch before update on public.faqs for each row execute function public.touch_updated_at();

create policy "Published content is public" on public.page_sections for select using (status = 'published' or public.is_admin_user());
create policy "Published chapters are public" on public.chapters for select using (status = 'published' or public.is_admin_user());
create policy "Published people are public" on public.team_members for select using (status = 'published' or public.is_admin_user());
create policy "Published events are public" on public.events for select using (status = 'published' or public.is_admin_user());
create policy "Published resources are public" on public.resources for select using (status = 'published' or public.is_admin_user());
create policy "Published articles are public" on public.articles for select using (status = 'published' or public.is_admin_user());
create policy "Published partners are public" on public.partners for select using (status = 'published' or public.is_admin_user());
create policy "Published FAQs are public" on public.faqs for select using (status = 'published' or public.is_admin_user());
create policy "Settings are public" on public.site_settings for select using (true);
create policy "Assets are public" on public.media_assets for select using (true);
create policy "Admins can read admin list" on public.admin_users for select using (public.is_admin_user());
create policy "Admins can read activity" on public.content_activity for select using (public.is_admin_user());
create policy "Admins manage settings" on public.site_settings for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage assets" on public.media_assets for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage sections" on public.page_sections for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage chapters" on public.chapters for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage people" on public.team_members for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage events" on public.events for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage resources" on public.resources for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage articles" on public.articles for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage partners" on public.partners for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage FAQs" on public.faqs for all using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admins manage activity" on public.content_activity for all using (public.is_admin_user()) with check (public.is_admin_user());

insert into storage.buckets (id, name, public) values ('public-media', 'public-media', true) on conflict (id) do nothing;
create policy "Public media is readable" on storage.objects for select using (bucket_id = 'public-media');
create policy "Admins manage public media" on storage.objects for all using (bucket_id = 'public-media' and public.is_admin_user()) with check (bucket_id = 'public-media' and public.is_admin_user());

-- Required for already-open public pages to receive published changes automatically.
alter publication supabase_realtime add table public.site_settings;
alter publication supabase_realtime add table public.page_sections;
alter publication supabase_realtime add table public.chapters;
alter publication supabase_realtime add table public.resources;
alter publication supabase_realtime add table public.articles;
alter publication supabase_realtime add table public.events;
