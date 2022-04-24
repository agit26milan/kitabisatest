This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction
Thank you for investing your time in Kitabisa code challenge. You should spend not more than 4 hours on the code test. Your solution will be the starting point to be used for the pair programming exercise in our technical interview.

## User Story
As a user of Kitabisa, I would like to see a list of campaigns that can be sorted by donation goal (ASC) and days left (ASC).

## Details
Using the following endpoint, request and render a Product List page with the response: https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json

* Render a Campaign List with the provided metadata

* Render a Campaign Card for each item in the results array.
* Target bar, below campaign name has different colour based on donation reached percentage against their goal. If donation goal achieved, the bar colour should be pink otherwise the colour is grey

## Expectations
We value functional, well structured and well-tested code at Kitabisa. Below are our expectations:

* TypeScript + React implementation with state management approach of your choice.
* We expect you to use your own bundler like webpack, parcel, rollup, vite avoid using `create-react-app`. 
* Plus point with `SSR` implementation (`Next.js` / `Fastify` / `Express` / `KOA` / `Hapi`). 

* Well-structured code with best practices applied where relevant.

* Unit test  (jasmine, jest, mocha) but preferable jest with testing library

* Cross-browser functional. Minimum IE11 support.

* Responsive and SEO friendly

* A README file explains any coding or architecture decisions you made, along with instructions to bootstrap and run your program.


## Included files

* README.md

* Mockup of Campaign List page

#kitabisa

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

## Node version
To run this project you must need at least nodejs version 12.22.12 if you use an old node js version make sure you update it or it should be show an error when run on local

## Architecture
This application build using Next js to get campaigns data and filter the campaigns. Why using next js, because next js can use SSR method and with SSR it should be good in SEO and we can use dynamic meta data when share link through website. Next js setup is always quite simple than the other framework like CRA.

## State Management
For state management this apps is using state management from react (useState), because this app is only one page and not share the data between component.

## Unit Test 
For unit test this app use jest with react-testing-library, because this library is complete, easy setup and easy to use too than other like enzyme or moca and react team is recomend this library too

## Hooks
To make logic code can be tested I use hooks function, with hook function make our code is easy to read

## Typescript
This app use type script, because with type script we know the data type of each variable. and make easier to develop which data is required and optional