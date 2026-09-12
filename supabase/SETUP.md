# Project A.S.H.A. Supabase setup

1. In the Supabase dashboard, open **SQL Editor** and run `migrations/20260912_project_asha_cms.sql` in full.
2. In **Authentication → URL Configuration**, add these redirect URLs:
   - `http://localhost:3000/auth/callback`
   - your production domain followed by `/auth/callback`
3. Deploy this code, then open `/admin/login` and request a magic link with the founder email address.
4. In **Authentication → Users**, copy that account's UUID. Run this in SQL Editor, replacing the UUID:

```sql
insert into public.admin_users (user_id, role)
values ('REPLACE-WITH-FOUNDER-USER-UUID', 'admin')
on conflict (user_id) do update set role = 'admin';
```

5. Sign in again at `/admin/login` and open the dashboard.
6. Sign in and open `/admin/setup`, then select **Import current website to Supabase**. It uploads the existing `public/` images and PDFs into the `public-media` bucket and seeds the current chapters, team, resources, blogs, press, events, partnerships, and homepage hero into Supabase.

Do not expose `SUPABASE_SERVICE_ROLE_KEY` in the browser or in a public environment variable.
