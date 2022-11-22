import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingPage = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center loading--page">
        <PacmanLoader size={80} color="#36d7b7" />
      </div>
    </>
  );
};

export default LoadingPage;
