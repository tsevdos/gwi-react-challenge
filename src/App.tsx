import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "antd";
import Home from "./views/Home";
import Cats from "./views/Cats";
import Header from "./components/Header";

const { Content } = Layout;

// Create react query client
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout className="layout-container">
          <Header />
          <Layout className="layout-content">
            <Content className="inner-content">
              <Routes>
                <Route path="/cats" element={<Cats />} />
                <Route path="/" element={<Home />} />
              </Routes>
              <footer>
                Made with{" "}
                <span role="img" aria-label="love">
                  ❤️
                </span>{" "}
                in Athens, Greece.
              </footer>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
