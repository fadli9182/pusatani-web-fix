import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pabrik = () => {
  const [listPabriks, setListPabriks] = useState();
  const [url, setUrl] = useState(`${BASE_URL}/pabrik?page=1`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  async function getPabrik() {
    try {
      let res = await axios.get(url);
      setListPabriks(res.data.data.data);
      setNextUrl(res.data.data.next_page_url);
      setPrevUrl(res.data.data.prev_page_url);
      console.log(res.data.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getPabrik();
  }, [url]);

  return (
    <>
      {listPabriks &&
        listPabriks.map((pabrik) => {
          return (
            <div key={pabrik.id} className="card mb-5 card--toko" style={{ maxWidth: "100%" }}>
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={pabrik.image} className="img-fluid p-3" alt="Foto toko" style={{ height: "200px", width: "300px", borderRadius: "20px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: "capitalize" }}>
                      {pabrik.name}
                    </h5>
                    <p>Pemilik: {pabrik.user_name}</p>
                    <hr />
                    <p className="card-text">Alamat: {pabrik.address}</p>
                    <p className="d-flex ">
                      <Link to={`/pabrik/${pabrik.id}`}>
                        <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.5 }} className=" btn btn-success">
                          Selengkapnya
                        </motion.button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="btn-group btn--page">
        {prevUrl && (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className="btn--login"
            onClick={() => {
              setListPabriks([]);
              setUrl(prevUrl);
            }}
          >
            Sebelumnya
          </motion.button>
        )}
        {nextUrl && (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className="btn--login"
            onClick={() => {
              setListPabriks([]);
              setUrl(nextUrl);
            }}
          >
            Selanjutnya
          </motion.button>
        )}
      </div>
    </>
  );
};

export default Pabrik;
