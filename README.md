# WEB CHALLENGE Marvel

https://web-challenge-marvel-husx.vercel.app/

## How to execute

To begin, navigate to https://developer.marvel.com/account and obtain both a public and private key. It may be necessary to create an account in order to do so. 

Next, you will need to create a file named `.env.local` and modify it to include the keys mentioned in the `.env` file.

```
NEXT_PUBLIC_KEY=<YOUR PUBLIC API KEY>
PRIVATE_KEY=<YOUR PRIVATE API KEY>
```

### Install dependencies:

```sh
npm install
```

### Execute in dev mode:

```sh
npm run dev
```

### Execute in prod mode:

```sh
npm run build
npm run start
```

### Execute the tests:

```sh
npm test
```

### Execute linter:

```sh
npm run lint
```

## Used frameworks and libraries

- TypeScript
- ReactJS
- NextJS
- Jest

## Proyect structure

```
src/
├── api.ts
├── app
│   ├── favicon.ico
│   ├── favorites
│   │   └── page.tsx
│   ├── global.css
│   ├── [id]
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── layout.tsx
│   ├── layout.module.css
│   ├── page.tsx
│   └── page.module.css
├── components
│   ├── Banner
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Card
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Comic
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── ComicCarousel
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── ExternalImage
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Heart
│   │   ├── constants.ts
│   │   ├── empty-heart.svg
│   │   ├── empty-thick-heart.svg
│   │   ├── full-heart.svg
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── HeartCounter
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Logo
│   │   ├── index.tsx
│   │   └── logo.svg
│   ├── Results
│   │   ├── index.tsx
│   │   └── index.module.css
│   └── Search
│       ├── index.tsx
│       ├── index.module.css
│       └── magnifying-glass.svg
├── state
│   ├── characters
│   │   ├── Context.tsx
│   │   ├── Provider.tsx
│   │   └── reducer.ts
│   └── favorites
│       ├── Context.tsx
│       ├── Provider.tsx
│       └── reducer.ts
└── utils
    ├── formatters.ts
    └── getServerSideQueryParams.ts
```
