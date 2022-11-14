# GlobalWebIndex engineering challenge (CatLover app)

## App details

The application is using the below technologies:

- [TypeScript](https://www.typescriptlang.org/) - for static (strong) typing
- [React](https://facebook.github.io/react/) - for building the client-side app and components
- [React Router](https://reactrouter.com/en/main) - for client-side routing
- [Ant Design](https://ant.design/) - for UI library and design system
- [axios](https://axios-http.com/docs/intro) - a promise-based HTTP Client
- [zustand](https://zustand-demo.pmnd.rs/) - for global state management
- [CSS modules](https://github.com/css-modules/css-modules) - for CSS styling
- [Jest](https://jestjs.io/) - for test runner, mocks and assertions
- [Cypress](https://testing-library.com/react) - for end-to-end testing

## Run locally

You need to have node.js installed. For development I used node version 16.18.0 and npm version 8.19.2, but you can use any node version (above 14). When you are ready you can install all dependencies and run the development server by typing the below commands:

```shell
npm install
npm start
open http://localhost:3000
```

Keep in mind that you should not run any process on port `3000`. Feel free to change these options from the `scripts` section of `package.json` if you want to.

## Run tests

Please keep in mind that in order to run the end to end tests you must run the app on `http://localhost:3000`.

### Run end-to-end tests in CLI:

```shell
npm test
```

### Open Cypress UI (to inspect end-to-end tests):

```shell
npm run test:ui
```

## Where are the other tests (end to end, unit and integration)?

Unfortunately I didn't have much time to create a complete set of tests. Feel free to view the tests I've written at my [npm packages](https://www.npmjs.com/~tsevdos), specifically the [Gnosis Design System](https://github.com/epignosis/gnosis),
[Gr Utils](https://github.com/tsevdos/npm-packages/tree/main/packages/gr-utils), [Greek in tech](https://github.com/tsevdos/npm-packages/tree/main/packages/greek-in-tech) and the not supported anymore [React validatus](https://github.com/tsevdos/react-validatus/blob/master/src/index.test.js).
