import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/";
import { Home, Cats, SelectedCat, Breeds, SelectedBreed, Favourites } from "./views/";
import { URLS } from "./utils/constants";

const App: FC = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path={URLS.home} element={<Home />} />
        <Route path={URLS.cats} element={<Cats />}>
          <Route path=":id" element={<SelectedCat />} />
        </Route>
        <Route path={URLS.breeds} element={<Breeds />}>
          <Route path=":id" element={<SelectedBreed />} />
        </Route>
        <Route path={URLS.favourites} element={<Favourites />} />
      </Routes>
    </AppLayout>
  </Router>
);

export default App;
