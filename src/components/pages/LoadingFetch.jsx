import React from "react";
import { PropagateLoader } from "react-spinners";

const LoadingFetch = () => {
  return (
    <div style={{ textAlign: "center" }}>
      Loading <PropagateLoader color="#36d7b7" />
    </div>
  );
};

export default LoadingFetch;
