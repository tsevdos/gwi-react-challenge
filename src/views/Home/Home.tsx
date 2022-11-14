import { FC } from "react";
import { Typography } from "antd";

const { Title } = Typography;
const Home: FC = () => (
  <>
    <Title>GlobalWebIndex Engineering Challenge</Title>
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
  </>
);

export default Home;
