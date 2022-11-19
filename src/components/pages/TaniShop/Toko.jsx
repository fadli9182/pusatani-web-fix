import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { Link } from "react-router-dom";

const Toko = () => {
  const [listTokos, setListTokos] = useState();
  async function getToko() {
    try {
      let res = await axios.get(`${BASE_URL}/toko`);
      setListTokos(res.data.data.data);
      console.log(res.data.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getToko();
  }, []);
  return (
    <>
      {listTokos &&
        listTokos.map((toko) => {
          return (
            <div key={toko.id} className="card mb-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={toko.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{toko.name}</h5>
                    <p>Pemilik: {toko.user_name}</p>
                    <hr />
                    <p className="card-text">Alamat: {toko.address}</p>
                    <p className="card-text">
                      <Link to={`/shop/${toko.id}`}>
                        <button className=" btn btn-success">Selengkapnya</button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {/* {listTokos?.map((toko) => {
        return (
          <div key={toko.id} className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={toko.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{toko.name}</h5>
                  <p>Pemilik: {toko.user_name}</p>
                  <hr />
                  <p className="card-text">Alamat: {toko.address}</p>
                  <p className="card-text">
                    <button className=" btn btn-success">Selengkapnya</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default Toko;
