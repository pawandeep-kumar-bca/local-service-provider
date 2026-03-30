import React from "react";
import Loader from "./components/common/Loader";
const App = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-4">
      <Loader />
      <Loader size="medium" color="black"/>
      <Loader size="extraMedium" />
      <Loader size="big" />

      <Loader />
    </div>
  );
};

export default App;
