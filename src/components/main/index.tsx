import React, { memo } from "react";
import MainView from "./main-view";
const Main: React.FC = () => {
  console.log("Main");

  return <MainView />;
};
export default memo(Main);
