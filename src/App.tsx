import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "antd";
import { Header } from "./components/";
import { Home, Cats, CatModal, Breeds, BreedsModal } from "./views/";
import { paths } from "./utils/constants";

const { Content } = Layout;

// Create react query client
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Header />
          <Layout>
            <Content className="inner-content">
              <Routes>
                <Route path={paths.cats} element={<Cats />}>
                  <Route path=":id" element={<CatModal />} />
                </Route>
                <Route path={paths.breeds} element={<Breeds />}>
                  <Route path=":id" element={<BreedsModal />} />
                </Route>
                <Route path={paths.home} element={<Home />} />
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
