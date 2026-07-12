# Project A.S.H.A. - Complete Deployment Guide

Use this guide to take the website from this computer to a public temporary link. Complete the sections in order.

## What you need before starting

- A GitHub account: https://github.com/signup
- A Vercel account: https://vercel.com/signup
- A Supabase account: https://supabase.com/dashboard/sign-up
- Access to this project folder: `C:\Users\goelm\OneDrive\Desktop\Coder-Moksh\project-asha`

Important: never upload or paste your `.env.local` file into GitHub. It contains project configuration. The file is already excluded by `.gitignore`.

---

## Part 1 - Confirm the website works on your computer

1. Open the project folder in your code editor.
2. Open a terminal in the project folder.
3. Run:

   ```powershell
   npm run dev
   ```

4. Open http://localhost:3000 in a browser.
5. Check the home page, About, Chapters, Team, Resources, Contact, and Get Involved pages.
6. Leave the terminal open while previewing. Stop the preview later with `Ctrl + C`.

The site has already passed a production build check. If the local preview does not start, run:

```powershell
npm install
npm run dev
```

---

## Part 2 - Create a GitHub repository

1. Sign in at https://github.com.
2. Click the `+` icon in the top-right corner, then choose **New repository**.
3. Use these settings:
   - Repository name: `project-asha`
   - Visibility: **Private** while the website is being developed. You can change it later if needed.
   - Do not tick **Add a README file**.
   - Do not tick **Add .gitignore**.
   - Do not choose a license yet.
4. Click **Create repository**.
5. Keep the repository page open. Copy the HTTPS repository address. It will look like:

   ```text
   https://github.com/YOUR-GITHUB-USERNAME/project-asha.git
   ```

---

## Part 3 - Upload this website to GitHub

In a terminal opened inside the project folder, run these commands one at a time.

```powershell
git branch -M main
git add .
git commit -m "Initial Project ASHA website"
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/project-asha.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

### If Git asks for your name or email

Run the following, replacing the sample details with your own:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then repeat the `git commit` command and the commands after it.

### If GitHub asks you to sign in

Follow the browser sign-in prompt. GitHub may ask you to authorize the command line. This is normal.

### Check that the upload worked

Refresh the GitHub repository page. You should see folders such as `app`, `components`, `lib`, and `public`.

You should not see `.env.local`, `node_modules`, `.next`, or local log files. If you do, stop and do not continue until they are removed from the Git commit.

---

## Part 4 - Create and configure a Supabase project

Supabase is already connected in the website code for future data, forms, and admin features. The site needs a Supabase project before it can use those features online.

1. Sign in at https://supabase.com/dashboard.
2. Click **New project**.
3. Choose your organization, or create one if Supabase asks.
4. Use these settings:
   - Project name: `project-asha`
   - Database password: create and save a strong password in a password manager. Do not put it in the website code.
   - Region: choose the closest region to your main users or team.
   - Plan: the free plan is suitable for a temporary preview.
5. Click **Create new project** and wait for setup to finish.
6. In the new Supabase project, open **Project Settings** then **API**.
7. Copy these two values:
   - Project URL
   - Publishable key or `anon` public key

Do not use the `service_role` key in the website. It is private and must never be exposed in a browser.

### Create the website environment values

In the project folder, open `.env.local`. It should contain:

```text
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

Replace the values only if you create a new Supabase project. Save the file, but do not commit it to GitHub.

### Note about forms and database tables

The current website has forms ready in the design, but they are not yet configured to save submissions to a database. Supabase tables, permissions, and form wiring should be created before collecting real volunteer, contact, partnership, or report submissions.

---

## Part 5 - Create a Vercel account and deploy

1. Go to https://vercel.com/signup.
2. Choose **Continue with GitHub**. This is the easiest option because Vercel can deploy updates automatically from the repository.
3. Approve Vercel's request to access your GitHub repositories.
4. In Vercel, click **Add New** then **Project**.
5. Find the `project-asha` repository and click **Import**.
6. On the configuration screen:
   - Project Name: `project-asha`
   - Framework Preset: **Next.js** (Vercel should detect it automatically)
   - Root Directory: leave as `./`
   - Build Command: leave the default
   - Output Directory: leave the default
7. Expand **Environment Variables** and add both values from `.env.local`:

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase public anon/publishable key |

8. Select all available environments: Production, Preview, and Development.
9. Click **Deploy**.
10. Wait for the build to finish. Vercel will show a temporary link similar to:

    ```text
    https://project-asha-xxxx.vercel.app
    ```

11. Open the link and check every public page.

Do not paste Supabase values into GitHub files or screenshots. Store them only in Vercel's Environment Variables settings and your local `.env.local`.

---

## Part 6 - Check the public website before sharing it

Open the Vercel URL on both a computer and a phone. Check:

- Navigation links work.
- The home page loads.
- About, Chapters, Team, Resources, Contact, and Get Involved pages load.
- Email and Instagram links are correct.
- No placeholder phone number or address appears.
- The Resources page includes emergency support information.
- Forms do not claim to submit information until their database setup is complete.
- The page looks good at mobile width.

If Vercel shows a build error:

1. Open the failed deployment in Vercel.
2. Open **Build Logs**.
3. Copy the first error message and share it with the developer helping with the site.

---

## Part 7 - Publish future website updates

Whenever you make website changes, run:

```powershell
git add .
git commit -m "Describe what changed"
git push
```

Vercel will automatically make a new deployment. The `main` branch deploys to the production Vercel URL.

---

## Part 8 - Optional external services for later

These are not required for the first temporary deployment.

### Domain name

Buy a domain only after the temporary Vercel site is approved. Common registrars include Cloudflare Registrar, Namecheap, Squarespace Domains, and GoDaddy. After purchase, go to the Vercel project, open **Settings** > **Domains**, add the domain, and follow Vercel's DNS instructions exactly.

### Professional email

When you own a domain, create an address such as `hello@projectasha.org` using Google Workspace, Microsoft 365, Zoho Mail, or another provider. Until then, keep using `project.asha.team@gmail.com`.

### Form email notifications

When the forms are connected to Supabase, add a service such as Resend, SendGrid, or Postmark so the team receives an email when someone submits a form. This requires a secure server-side setup; do not place email service secret keys in `NEXT_PUBLIC_` variables.

### Analytics

Add Vercel Analytics or Google Analytics only after the Privacy Policy and Cookie Policy are completed and published.

---

## Final checklist

- [ ] Website works at `http://localhost:3000`
- [ ] GitHub repository created
- [ ] Website committed and pushed to GitHub
- [ ] `.env.local` is not present on GitHub
- [ ] Supabase project created or existing credentials confirmed
- [ ] Supabase public URL and anon key added in Vercel
- [ ] Vercel project deployed
- [ ] Temporary `vercel.app` link tested on desktop and mobile
- [ ] Database tables and form handling added before collecting real submissions
- [ ] Domain purchase postponed until the temporary website is approved

## Official help links

- GitHub: adding local code to a repository - https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
- Vercel: deploying a Git repository - https://vercel.com/docs/git
- Vercel: environment variables - https://vercel.com/docs/environment-variables
- Supabase documentation - https://supabase.com/docs
