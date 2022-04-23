This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Architecture

This application using SSR method to get campaign and filter the campaign. Why using SSR method because with SSR it should be good SEO and we can use dynamic meta data when share link through website. Next js setup is quite simple than the other framework like CRA.

## State Management
For state management this apps is using state management from react (useState), because this app is only one page and not share the data between component.

## Unit Test 
For unit test this app use jest with react-testing-library, because this test library is complete, easy setup and easy to use too than other like enzyme or moca and react team is recomend this library too

## Hooks
To make code can be tested I use hooks function, with hook function make our code is easy to read

## Typescript
This app use type script, because with type script we know the data type of each variable. and make easier to develop which data is required and optional