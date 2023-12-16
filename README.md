# Test task for Haut AI Front-end position. Custom Meter component.

Preview link: [timurgumarov.github.io/haut-test-meter/](https://timurgumarov.github.io/haut-test-meter/)

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Stack

[Svelte](https://svelte.dev/) - a front-end, open-source JavaScript framework for making fast interactive webpages.

[Histoire](https://histoire.dev) - a tool for creating application stories and describing functionality.

## Project structure

```
$PROJECT_ROOT
│   # App source folder
├── src
│   │   # Static files that used in dev
│   ├── assets
│   │   # Components folder
│   └── lib
│       │   # Component that made for the test task
│       ├── Meter
│       │   # Component for demonstration
│       └── Presentation
│   # Static files
└── public
```

## Setup

1. Clone the project
2. Make sure to install the dependencies

> The project currently has some dependency issues.
> Historie needs the oldest version of some libraries, but it works well
> with the new ones. Therefore, you will need to install dependencies with
> the flag `npm install --force` to ignore these errors.
> This will need to be fixed in the future.

```bash
# setup project
npm install

# serve with hot reload at localhost:5173/haut-test-meter/
npm run dev
```

## Scripts

```bash
# build the project
npm run build

# serve builded project from `dist/` folder
# at localhost:4173/haut-test-meter/
npm run preview

# run types check
npm run check

# serve histoire with hot reload at localhost:6006/haut-test-meter/histoire/
npm run story:dev

# build histoire for the project
npm run story:build

# serve builded histoire project from `dist/` folder
# at localhost:6006/haut-test-meter/histoire/
npm run story:preview

# helps me to deploy easily at Github pages
npm run deploy
```

## P.S.

I have tried running tests, but so far I have encountered difficulties installing and running libraries. So far, I have decided to submit the project without tests. If it turns out to install and run everything on the weekend, then I will finish the tests part.

I also tried to run the build of Histoire pages on github pages at this link: [timurgumarov.github.io/haut-test-meter/historie/](https://timurgumarov.github.io/haut-test-meter/histoire/), but it failed. The variants pages show an error instead of rendering the page with the component. I will try to solve this problem in the near future.
