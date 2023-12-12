import { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loadable } from "../components/common";

const Home = Loadable(lazy(() => import("../views/common/home")));

const Views: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Views;
