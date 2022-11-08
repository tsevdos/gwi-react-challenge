import { FC } from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;
const Home: FC = () => {
  return (
    <>
      <Title>GlobalWebIndex Engineering Challenge</Title>
      <hr />

      <Title level={2}>App details</Title>

      <p>The application is using the below technologies:</p>

      <ul>
        <li>
          <strong>
            <a href="https://facebook.github.io/react/" rel="nofollow">
              React
            </a>
          </strong>
          - for building the client-side app and components
        </li>
        <li>
          <strong>
            <a href="https://jestjs.io/" rel="nofollow">
              Jest
            </a>
          </strong>{" "}
          - for test runner, mocks and assertions
        </li>
        <li>
          <strong>
            <a href="https://testing-library.com/react" rel="nofollow">
              react-testing-library
            </a>
          </strong>{" "}
          - for component unit and integration testing
        </li>
        <li>
          <strong>
            <a href="https://www.cypress.io/" rel="nofollow">
              Cypress
            </a>
          </strong>{" "}
          - for end-to-end testing
        </li>
      </ul>
    </>
  );
};

export default Home;
