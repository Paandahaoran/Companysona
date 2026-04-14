create table if not exists public.companysona_events (
  id bigserial primary key,
  event_name text not null,
  anonymous_id text,
  session_id text,
  result_slug text,
  payload jsonb not null default '{}'::jsonb,
  source jsonb not null default '{}'::jsonb,
  path text,
  hash text,
  user_agent text,
  client_created_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.companysona_events enable row level security;

drop policy if exists "Allow anonymous inserts for Companysona events" on public.companysona_events;

create policy "Allow anonymous inserts for Companysona events"
on public.companysona_events
for insert
to anon
with check (true);

create index if not exists companysona_events_event_name_idx
on public.companysona_events (event_name);

create index if not exists companysona_events_result_slug_idx
on public.companysona_events (result_slug);

create index if not exists companysona_events_session_id_idx
on public.companysona_events (session_id);

create index if not exists companysona_events_created_at_idx
on public.companysona_events (created_at);
