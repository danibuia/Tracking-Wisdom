/* eslint-disable arrow-body-style */
import { Header, SideDrawer } from "../../../components/common";
import { ComponentType, FC } from "react";


const WithViewWrapper = (Component: ComponentType): FC => {
  return (): JSX.Element => {
    return (
      <>
        <>
          <SideDrawer />
          <Header />
          <Component />
        </>
      </>
    );
  };
};

export default WithViewWrapper;
