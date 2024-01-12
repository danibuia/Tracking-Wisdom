import { ComponentType, FC } from "react";


const WithViewWrapper = (Component: ComponentType): FC => {
  return (): JSX.Element => {
    return (
      <>
        <>
          <Component />
        </>
      </>
    );
  };
};

export default WithViewWrapper;
