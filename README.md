# npm-boilerplater

![npm](https://img.shields.io/npm/v/npm-boilerplater) [![Build Status](https://travis-ci.org/we-code-now/npm-boilerplater.svg?branch=master)](https://travis-ci.org/we-code-now/npm-boilerplater) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c67890a8255a46d9a65e7bb158b6dd7d)](https://www.codacy.com/app/StevenTea/npm-boilerplater?utm_source=github.com&utm_medium=referral&utm_content=we-code-now/npm-boilerplater&utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/c67890a8255a46d9a65e7bb158b6dd7d)](https://www.codacy.com/app/StevenTea/npm-boilerplater?utm_source=github.com&utm_medium=referral&utm_content=we-code-now/npm-boilerplater&utm_campaign=Badge_Coverage) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/npm-boilerplater) ![GitHub](https://img.shields.io/github/license/we-code-now/npm-boilerplater)

Create your next ES6 module in a wink!

## Table of Contents

- [Features](#features)
- [Quick start](#quick-start)
- [Self-explanatory structure](#self-explanatory-structure)
- [Commands](#commands)
- [License](#license)

## Features

- **Code** - [Babel](https://babeljs.io/) will transpile your ES6 code into ES5 for backwards compatiblity.
- **Linter** - [Eslint](https://eslint.org/) and [AirBnB config](https://www.npmjs.com/package/eslint-config-airbnb).
- **Formatter** - [EditorConfig](https://editorconfig.org/) and [Prettier](https://prettier.io/) with [Eslint-compatible](https://github.com/prettier/prettier-eslint-cli).
- **Test** - [Jest](https://jestjs.io/) is a great Javascript testing framework with built-in assertion library, mocking, code coverage and more. Debug in Visual Studio Code is great!
- **CI** - [TravisCI](https://travis-ci.org/) will help you to test and deploy your project automatically.
- **Analysis** - [Codacy](https://www.codacy.com/) can analyze your code automatically and you can send code coverage metrics to it.
- **Useful commands** - Run npm essential tasks can be easier.
- **Highly customizable** - Easily to customize to fit your need.

## Quick start

- Clone this repo, then remove `.git` directory.

```
$ git clone https://github.com/we-code-now/npm-boilerplater.git your-project-name
$ cd your-project-name
$ rm -rf .git
$ git init
```

- Customize, if needed. See next section, please!

## Self-explanatory structure

```
.
├── LICENSE
├── README.md
├── package.json
├── .gitignore
├── .npmignore
├── .editorconfig        # EditorConfig config
├── .eslintrc.js         # Eslint config
├── .eslintignore
├── .travis.yml          # TravisCI config
├── jest.config.js       # Jest config
├── babel.config.js      # Babel config
├── coverage/            # code coverage report in here
├── lib/                 # build destination
│   └── index.js           # production code
├── src/                 # development code
│   ├── index.js           # source
│   └── index.spec.js      # test
└── .vscode/             # Visual Studio Code config
    ├── launch.json        # Debugging with Jest
    └── settings.json      # Eslint/Prettier extensions config
```

## Commands

- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run test` - Run test
- `npm run test:watch` - Run test in watch mode
- `npm run cover` - Run test with code coverage report
- `npm run cover:codacy` - Run test with code coverage report and send metrics to Codacy. Read [setup guide](https://support.codacy.com/hc/en-us/articles/207279819-Coverage).
- `npm run build` - Transpile ES6 code into ES5 from `src/` into `lib/`
- `npm run clean` - Remove build directory destination `lib/`
- `npm publish` - Publish package to [npm](https://www.npmjs.com/)

## License

MIT
