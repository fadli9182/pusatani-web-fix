import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";

const Pabrik = () => {
  const [listPabriks, setLisPabriks] = useState();
  async function getPabrik() {
    try {
      let res = await axios.get(`${BASE_URL}/pabrik`);
      setLisPabriks(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getPabrik();
  }, []);

  return (
    <>
      {listPabriks?.map((pabrik) => {
        return (
          <div key={pabrik.id} className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pabrik.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{pabrik.name}</h5>
                  <p>Pemilik: {pabrik.user_name}</p>
                  <hr />
                  <p className="card-text">Alamat: {pabrik.address}</p>
                  <p className="card-text">
                    <button className=" btn btn-success">Selengkapnya</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Pabrik;
