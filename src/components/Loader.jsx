import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full py-2 px-2 flex justify-center">
      <PuffLoader color="#F20000 " />
    </div>
  );
};

export default Loader;
