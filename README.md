# MOZILERO AI
**Imagine. Create. Write. Innovate.**

MOZILERO AI is an all-in-one AI tools and digital services platform. This repository is structured as a web + mobile monorepo.

## Current implementation status

### Phase 1 foundation
- Responsive Next.js web homepage and product overview.
- Supabase email/password registration and sign-in flow.
- Email verification callback and sign-out endpoint.
- Authenticated user dashboard foundation.
- Supabase profile/project schema with row-level security.
- Expo Router Android/iOS application shell.

### Not yet production-enabled
AI generation, image generation, document processing, credits, subscriptions, Paystack/Flutterwave payments, admin operations, and production deployment are subsequent phases. The dashboard deliberately labels these features as upcoming; it does not simulate AI output, balances, or successful payments.

## Repository structure
- `apps/web` — Next.js, React and TypeScript web application.
- `apps/mobile` — Expo / React Native Android and iOS application shell.
- `supabase/migrations` — versioned PostgreSQL migrations.
- `.env.example` — required environment variable names (no secrets).

## Requirements
- Node.js 20.9+
- npm 10+
- A Supabase project

## Run the web app
1. Copy `.env.example` to `apps/web/.env.local` (or configure the same variables in your deployment platform).
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Run `supabase/migrations/0001_phase1_foundation.sql` in Supabase SQL Editor.
4. In Supabase Auth, enable Email and configure site URL plus redirect URL `http://localhost:3000/auth/callback`.
5. From the repository root run `npm install`, then `npm run dev`.

## Run Android / iOS
From the repository root run `npm install`, then `npm run mobile`. Use Expo Go for development where supported, or create native builds with EAS after configuring app identifiers and store metadata.

## Environment variables
See `.env.example`. Only the public Supabase URL and anon key may be used by browser code. Service-role, AI-provider and payment secrets must remain server-side. Never commit real credentials.

## Security and launch checklist
- Configure Supabase Auth redirect URLs, email templates and MFA policy.
- Review RLS policies before adding tables or service-role operations.
- Add server-side authorization and rate limiting to all AI/payment endpoints.
- Verify payment signatures and provider status before granting credits or subscriptions.
- Configure data retention, privacy notices, backups, monitoring and incident response.
- Run dependency, type, build, accessibility and security checks before public launch.

## Roadmap
1. Phase 1: foundation (this branch).
2. Phase 2: real AI tools through a provider abstraction and server-side routes.
3. Phase 3: image generation and secure asset history.
4. Phase 4: ledger-backed credits, subscriptions and verified Paystack/Flutterwave payments.
5. Phase 5: role-based administration and financial reporting.
6. Phase 6: teams, referrals and advanced workspace features.
7. Phase 7: automated QA, security review and production launch.

No settlement account or API credential is stored in this repository. Configure merchant settlement details inside the payment provider's verified merchant dashboard.
