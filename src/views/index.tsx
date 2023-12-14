import { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loadable } from "../components/common";

const Today = Loadable(lazy(() => import("../views/common/home")));
const Tommorow = Loadable(lazy(() => import("../views/common/home")));
const ThisWeek = Loadable(lazy(() => import("../views/common/home")));
const Planned = Loadable(lazy(() => import("../views/common/home")));
const Completed = Loadable(lazy(() => import("../views/common/home")));

const Views: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="tomorrow" element={<Tommorow />} />
        <Route path="this-week" element={<ThisWeek />} />
        <Route path="planned" element={<Planned />} />
        <Route path="completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Views;
