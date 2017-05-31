# 60fram.es React Boilerplate [![Build Status](https://travis-ci.org/60frames/react-boilerplate.svg?branch=master)](https://travis-ci.org/60frames/react-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/60frames/react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/60frames/react-boilerplate?branch=master)

Production-ready boilerplate for building *universal* web apps with [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)

## tl;dr

```
$ git clone https://github.com/vinks/react-boilerplate.git
$ cd react-boilerplate
$ rm -r .git
$ yarn
$ yarn start
```

## Features

- ES2015/16 with [Babel](https://github.com/babel/babel)
- Universal rendering with support for data fetching *and code splitting*.
- Hot reloading on both client and *server*
- Locally scoped CSS with [CSS modules](https://github.com/css-modules)
- Scalable unit testing via [Jest](https://github.com/facebook/jest)
- Development and release builds with [Webpack 2](https://github.com/webpack/webpack)
- State management with [Redux](https://github.com/reactjs/redux)
- ...Just 4 commands

## Commands
## NPM Script Commands
 All of the scripts are listed as following:

`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:6060`. HMR will be enabled.
`start:production`|Builds the app ready for release and run it on the production server at `localhost:6060`.
`start:prod`|Run your app on the production server only at `localhost:6060`.
`test`|Runs unit tests.
`build`|Builds the app ready for release.

## Environment Variables
> NOTE: Any of the environment variables can be made available to the client by explicitly declaring them in the root [Html](src/components/html/Html.js) component. This extra step is required to prevent accidentally leaking sensitive data to the client.

## License
MIT
