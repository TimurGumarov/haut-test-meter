# Test task for Haut AI Front-end position. Custom Meter component.

Preview link: [timurgumarov.github.io/haut-test-meter/](https://timurgumarov.github.io/haut-test-meter/)

Histoire: [timurgumarov.github.io/haut-test-meter/histoire/](https://timurgumarov.github.io/haut-test-meter/histoire/)

## Recent updates

-   added WebdriverIO and specs for components
-   made some refactoring
-   removed error-handling and values restrictions
-   updated functionality with smooth animation
-   added inputs for `min` and `max` values to Histoire and Presentation
-   added `.nojekyll` to remove Histoire errors on GitHub pages
-   fixed `npm install` dependency resolving problem

## Recommended environment Setup

[VS Code](https://code.visualstudio.com/) + [NodeJS](https://nodejs.org/).

## Stack

[Svelte](https://svelte.dev/) - a front-end, open-source JavaScript framework for making fast interactive webpages.

[Histoire](https://histoire.dev) - a tool for creating application stories and describing functionality.

[WebdriverIO](https://webdriver.io/) - a progressive automation framework built to automate modern web and mobile applications.

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

# run tests
npm run wdio

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
