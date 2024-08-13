import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/Detail";
import { Search } from "./pages/Search";
import { Recom } from "./pages/menu/Recom";
import { Location } from "./pages/menu/Location";
import { PageNotFound } from "./PageNotFound";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DetailTheme } from "./pages/DetailTheme";
import { DetailFood } from "./pages/DetailFood";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.detailFood} element={<DetailFood />} />
        <Route path={routes.detailTheme} element={<DetailTheme />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.recommend} element={<Recom />} />
        <Route path={routes.location} element={<Location />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
