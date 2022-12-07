import React from "react";
import gambarLogo from "./asset/image/gambarLogo.png";

const LoadingPage = () => (
  <>
    <div className="d-flex align-items-center justify-content-center loading--page">
      <img className="loading__animate" src={gambarLogo} width={"200px"} alt="" />
    </div>
  </>
);

export default LoadingPage;
