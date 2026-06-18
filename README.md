# my-business-site

Sports & casual clothing store built with Next.js, Tailwind CSS, and Stripe.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Get your keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add environment variables in Vercel project settings
4. Deploy!
