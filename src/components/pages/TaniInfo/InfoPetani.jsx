import React from "react";

const InfoPetani = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column jumlah--content">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-12 text-center">
            <h1 style={{ fontSize: "48px", marginBottom: "30px" }}>Jumlah Petani Di Indramayu</h1>
          </div>
          <div className="col-4 text-center w-25" style={{ borderRight: "4px solid rgba(0,0,0,.5)" }}>
            <h1>36</h1>
            <h5>
              Petani <br /> Mandiri
            </h5>
          </div>
          <div className="col-4 text-center w-25" style={{ borderRight: "4px solid rgba(0,0,0,.5)" }}>
            <h1>112</h1>
            <h5>
              Petani <br /> Menengah
            </h5>
          </div>
          <div className="col-4 text-center w-25">
            <h1>3000</h1>
            <h5>
              Petani <br /> Tradisional
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPetani;
