import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./components/";
import { Home, Cats, CatModal, Breeds, BreedsModal } from "./views/";
import { URLS } from "./utils/constants";

const { Content } = Layout;

const App: FC = () => (
  <Router>
    <Layout>
      <Header />
      <Layout>
        <Content className="inner-content">
          <Routes>
            <Route path={URLS.home} element={<Home />} />
            <Route path={URLS.cats} element={<Cats />}>
              <Route path=":id" element={<CatModal />} />
            </Route>
            <Route path={URLS.breeds} element={<Breeds />}>
              <Route path=":id" element={<BreedsModal />} />
            </Route>
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
);

export default App;
