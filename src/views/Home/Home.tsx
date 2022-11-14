import { FC } from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Home: FC = () => (
  <>
    <Title>GWI Engineering Challenge</Title>
    <Title level={2}>CatLover</Title>
    <hr />
    <Title level={2}>App details</Title>
    <p>The application is using the below technologies:</p>
    <ul>
      <li>
        <strong>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            TypeScript
          </a>
        </strong>{" "}
        - for static (strong) typing
      </li>
      <li>
        <strong>
          <a href="https://facebook.github.io/react/" target="_blank" rel="noreferrer">
            React
          </a>
        </strong>{" "}
        - for building the client-side app and components
      </li>
      <li>
        <strong>
          <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">
            React Router
          </a>
        </strong>{" "}
        - for client-side routing
      </li>
      <li>
        <strong>
          <a href="https://ant.design/" target="_blank" rel="noreferrer">
            Ant Design
          </a>
        </strong>{" "}
        - as design system and UI library
      </li>
      <li>
        <strong>
          <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">
            axios
          </a>
        </strong>{" "}
        - a promise-based HTTP Client
      </li>
      <li>
        <strong>
          <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noreferrer">
            zustand
          </a>
        </strong>{" "}
        - for global state management
      </li>
      <li>
        <strong>
          <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">
            CSS modules
          </a>
        </strong>{" "}
        - for CSS styling
      </li>
      <li>
        <strong>
          <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
            Jest
          </a>
        </strong>{" "}
        - for test runner, mocks and assertions
      </li>
      <li>
        <strong>
          <a href="https://testing-library.com/react" target="_blank" rel="noreferrer">
            react-testing-library
          </a>
        </strong>{" "}
        - for component unit and integration testing
      </li>
      <li>
        <strong>
          <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">
            Cypress
          </a>
        </strong>{" "}
        - for end-to-end testing
      </li>
    </ul>
    <Title level={2}>Run locally</Title>
    <p>
      You need to have node.js installed. For development I used node version 16.18.0 and npm version 8.19.2, but you
      can use any node version (above 14). When you are ready you can install all dependencies and run the development
      server by typing the below commands:
    </p>
    <code>
      <pre>{`npm install
npm start
open http://localhost:3000 
`}</pre>
    </code>
    <p>
      Keep in mind that you should not run any process on port <Text code>3000</Text>. Feel free to change these options
      from the <Text code>scripts</Text> section of <Text code>package.json</Text> if you want to.
    </p>
    <Title level={2}>Run tests</Title>
    <p>
      Please keep in mind that in order to run the end to end tests you must run the app on{" "}
      <Text code>http://localhost:3000</Text>.
    </p>
    <Title level={3}>Run end to end tests in CLI:</Title>
    <p>
      <Text code>npm test</Text>
    </p>
    <Title level={3}>Open Cypress UI:</Title>
    <p>
      <Text code>npm run test:ui</Text>
    </p>
    <Title level={2}>Where are the other tests (end to end, unit and integration)?</Title>
    <p>
      Unfortunately I didn't have much time to create a complete set of tests. Feel free to view the tests I've written
      at my{" "}
      <a href="https://www.npmjs.com/~tsevdos" target="_blank" rel="noreferrer">
        npm packages
      </a>
      , specifically the{" "}
      <a href="https://github.com/epignosis/gnosis" target="_blank" rel="noreferrer">
        Gnosis Design System
      </a>
      ,{" "}
      <a href="https://github.com/tsevdos/npm-packages/tree/main/packages/gr-utils" target="_blank" rel="noreferrer">
        Gr Utils
      </a>
      ,{" "}
      <a
        href="https://github.com/tsevdos/npm-packages/tree/main/packages/greek-in-tech"
        target="_blank"
        rel="noreferrer"
      >
        Greek in tech
      </a>{" "}
      and the not supported anymore{" "}
      <a
        href="https://github.com/tsevdos/react-validatus/blob/master/src/index.test.js"
        target="_blank"
        rel="noreferrer"
      >
        React validatus
      </a>
      .
    </p>
  </>
);

export default Home;
