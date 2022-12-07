// import { PropagateLoader } from "react-spinners";

const LoadingFetch = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text--green">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5>Sedang memuat data...</h5>
    </div>
  );
};

export default LoadingFetch;
