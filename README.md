# Grandata React Library boilerplate

This boilerplate, partly based on this Egghead.io courses; 
- [Using Webpack for Production JavaScript Applications](https://egghead.io/courses/using-webpack-for-production-javascript-applications)
- [Publish Javascript packages on NPM](https://egghead.io/lessons/javascript-document-npm-packages-using-readme-files)

## Table of Contents

1. [Features](#features)
2. [NPM Scripts](#npm-scripts)
3. [Contributing](CONTRIBUTING.md)
4. [Changelog](CHANGELOG.md)
4. [Getting Started](#getting-started)
      1. [Developing a Component](#developing-a-component)
      2. [Start Coding](#start-coding)
          1. [Dumb Component](#dumb-component)
          2. [Update yours JS files](#verify-that-js-works)
          3. [Update yours CSS files](#verify-that-css-works)
          4. [Troubleshooting](#troubleshooting)
              1. [Importing React Children type](#importing-react-children-type)
      3. [Typecheck with Flow](#check-your-types)
      4. [Document the components](#document-the-component-with-styleguidist)
      5. [Tests with Jest](#running-tests)
      6. [Coverage with Istambul](#coverage-to-the-rescue)
      7. [Build the library](#try-the-bundle)
      8. [Publish](#release-the-kraken)

## Features
* React
* ES2015/ES2016
* Node6
* Npm as a task/build runner
* [Rollup](https://rollupjs.org/) with tree-shaking
* [Airbnb CodeStyle](https://github.com/airbnb/javascript)
* Linting with eslint extended with Airbnb config
* Unit tests with Jest and Enzyme
* Code coverage and reporting with Istanbul
* CSS-Modules with PreCSS, Autoprefixer and POST-CSS
* [Storybook3](https://github.com/storybooks/storybook) with knobs, info and notes pluggins
* [Styleguidist](https://github.com/styleguidist/react-styleguidist) with snapguidist
* [Static TypeCheck with Flow](https://github.com/facebook/flow/)


## NPM Scripts
* `start`: run storybook, eslint, serving files at http://localhost:6006
* `guide`: run styleguidist server with eslint at http://localhost:6007
* `develop`: run styleguidist and storybook both at the same time in parallel mode
* `test`: run unit tests
* `test:watch`: run unit tests in watch mode
* `test:coverage`: run unit tests with coverage report
* `lint`: lint according to rules in `package.json` eslintConfig prop
* `clean`: remove dist and coverage directory
* `build`: bundle the lib to the dist dir using development settings
* `build:prod`: bundle the lib to the dist dir using production settings
* `build:guide`: bundle the styleguide app to the styleguide dir
* `typecheck`: run flowtype for check types in JS files
* `typecheck:coverage`: run flowtype with coverage
* `coverage`: run test, flow and generate reports into coverage dir


## Getting started
* Install [Node6 or Node8](https://nodejs.org/en/), preferably using [nvm](https://github.com/creationix/nvm)
* Clone this repository: `git clone https://github.com/GranData/react-library` (or download zip)
* CD to project directory: `cd react-library`
* Remove existing git: `rm -rf .git`
* Init your git: `git init`
* Install dependencies: `npm install` 
* Modify `package.json`, e.g. `name, author, description, repository` 
* Add your own 3'rd party dependencies to `package.json`

>**Note:** Remember to add your own repo to package.json
```
  "repository": {
    "type": "git",
    "url": "https://github.com/<your-git>/<your-project>.git"
  },
```

### Developing a Component
A typical UI component should comply with the following guidelines:

* It should begin with the `// @flow` annotation to enable Flow checker on the file.
* If it has no state, it should be declared as a [Dumb Component](#dumb-component).
* Unless having another team member approval, all components should have `className` and `style` props declared.
* [Flow coverage](#coverage-to-the-rescue) of the file must be above the configured threshold.
* It should have [tests](#running-tests) and code coverage must be above the configured threshold.
* It should have [Styleguidist examples](#document-the-component-with-styleguidist) about its usage.
* It should have a [story](#start-coding) declared. With knobs, preferably.
* All code must follow the configured code style.
* For any design concept, we try to follow [Lightning Design System](https://lightningdesignsystem.com/).

### Start Coding
We use [Storybook](https://storybook.js.org/) as our UI Development Environment.

Storybook monitors the `<root-dir>/src/components` directory for stories. All of them should be
called `<root-dir>/src/components/<Component-name>/<Component-name>.story.js`.

* Open a console (shell) and type: ```npm start```
* Open a browser at `http://localhost:6006`


#### Dumb Component

For a definition of Dumb Component, please read this [article](https://jaketrent.com/post/smart-dumb-components-react).

Dumb components should be declared as arrow functions like the following:

```javascript
type MyComponentProps = {
  myProp: boolean,
  anotherProp?: string
};

const MyComponent = ({ myProp, anotherProp }: MyComponentProps) => {
  ...
  return <final-JSX-code-here>;
};

MyComponent.defaultProps = {
  anotherProp: "foo"
};

export default MyComponent;
```

#### Verify that JS works
* Modify `./src/components/Example/Example.js`

```javascript
import React from 'react';
import type { Children } from 'react';
import cn from 'classnames/bind';
import styles from './Example.css';

const StatelessComponent = ({ message = 'world' }: Props) =>
  (<div className={cx('Message', 'info')}>
    <span>Hello {message}, React is awesome !!!</span>
  </div>);

export default StatelessComponent;
```

* Switch to browser and click the `Example` Story
* The message should be displayed with, e.g. `Hello world, React is awesome !!!`


#### Verify that CSS works
* Change background color, e.g. in `./src/components/Example/Example.css`

```css
info {
  background-color: green;
  ...
}
```
* Switch to browser
* The message background should be green


#### Troubleshooting

##### Importing React Children type

In order to import and use this type, the following code should be included:

```js
import type { Children } from "react";
...
type MyType = {
  children: Children<*>,
  ...
};
```

### Check your types
* `npm run typecheck` for run flow


### Document the component with styleguidist
* `npm run guide`
* Open a browser at `http://localhost:6007`

Styleguidist monitors the `<root-dir>/src/components` directory for components. Nevertheless, examples are user-defined in a `<Component-name>.md` file within the subdirectory of the component. For instance:

```
src
+-- components
    +-- Example
        +-- Example.md
```

Where that `Example.md` file could be the following way:

```
Hello World:
    <StatelessComponent />
```

* Modify `./src/components/Example/Readme.md`
```md
Hello Universe:
    <StatelessComponent message="universe"/>
```
* Switch to browser and the component message should be `Hello universe, React is awesome !!!`


### Running tests
Unit tests, uses Jest as test runner.
* `npm run test or npm run test:watch` for run the test optional with watching mode


### Coverage to the rescue
Istanbul is used for code coverage and reporting, so:
* `npm run coverage` and check your testing skills


### Try the bundle
* `npm run build or npm run build:prod` for bundle in develop o production mode


### Release the Kraken
Publish your lib into your private registry or share with the community
* `npm publish`

>**Note:** Before publish, if you will do it into your private registry, remember to add the url into package.json until continue.
```
  "publishConfig": {
    "registry": "https://registry.npmjs.com"
  },
```
