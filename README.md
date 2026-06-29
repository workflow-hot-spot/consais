# Consais Website

Marketing/portfolio website for Consais (Concise AI Solutions), an AI/software consulting company.

## Tech Stack

- **Framework**: React 18 + TypeScript, built with **Vite** (client-side SPA, no SSR)
- **Styling**: Tailwind CSS + **shadcn/ui** (Radix UI primitives) — see `src/components/ui/`
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS — contact form submissions are sent directly from the browser, no backend
- **Other**: TanStack Query, React Markdown (blog rendering), Lucide icons, next-themes (dark mode)

## Architecture

This is a static SPA with no backend, database, or CMS.

- `src/App.tsx` — defines all routes
- `src/pages/` — one file per route (Home, Services, About, Team, Blog, Careers, Contact, Technologies, How We Work, Privacy/Terms, 404)
- `src/components/` — shared components (Header, Footer, Hero, Contact form, etc.)
- `src/components/ui/` — shadcn/ui component library

All page content (testimonials, team bios, service lists, blog posts) is hardcoded as JS objects/arrays inside the components. Updating content requires editing code and redeploying.

## Functionality

- **Contact form** (`src/components/Contact.tsx`) → EmailJS → sends to `support@consais.com`
- **Blog** (`src/pages/BlogPage.tsx`) — posts are Markdown strings embedded in the file, rendered via `react-markdown`
- **Analytics/chat**: Google Tag Manager, Google Analytics, and a Tawk.to live-chat widget, wired into `index.html`
- Polished UI: gradients, fade/scale animations, glassmorphism, responsive nav with dropdown, all via the Tailwind config
- **Equity Research Reports**: a "Interested in Indian Equity Research?" callout on `/blog` links to a sector-grouped table of contents at `/blog/equityresearch`, with individual reports at `/blog/equityresearch/<company-slug>`. Each report is an externally authored HTML file embedded via an auto-sizing iframe, so editing the HTML file updates the live report with no React changes needed. To add a new report: drop a new HTML file under `src/equity/reports/<sector>/`, add an entry to `src/data/equityResearch.ts`, create a small page component following `src/pages/equityReports/CrudeChemTechnologyReport.tsx`, and add one route in `src/App.tsx`.

## Local Development

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Deployment

GitHub Actions (`.github/workflows/main.yml`) deploys automatically on push to `main`:

1. SCPs the repo to a self-hosted Hostinger VPS over SSH
2. Runs `npm install && npm run build` on the server
3. Wipes `/var/www/html/` and drops in the new `dist/` build
4. Tests and reloads Nginx

This is a static build served directly by Nginx — there is no PM2/Node.js process running on the server.