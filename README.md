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
- [React Testing Library](https://testing-library.com/react) - for component unit and integration testing
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

### Run all tests (unit and end to end):

```shell
npm test
```

### Run unit tests:

```shell
npm run test:unit
```

### Run end to end tests (make sure the app is running):

```shell
npm run test:e2e
```

You can also run and inspect the integration tests using the cypress UI by typing

```shell
npm run test:e2e:ui
```
