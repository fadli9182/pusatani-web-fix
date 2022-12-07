/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBarPabrik from "./SearchBarPabrik";
import LoadingFetch from "../LoadingFetch";

const Pabrik = () => {
  const [loading, setLoading] = useState(false);
  const [listPabriks, setListPabriks] = useState([]);
  const [url, setUrl] = useState(`${BASE_URL}/pabrik?page=1`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchParam, setSearchParam] = useSearchParams();

  const keyword = searchParam.get("keyword") || "";

  async function getPabrik() {
    try {
      setLoading(true);
      let res = await axios.get(url);
      setListPabriks(res.data.data.data);
      setNextUrl(res.data.data.next_page_url);
      setPrevUrl(res.data.data.prev_page_url);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getPabrik();
  }, [url]);

  function handleSearch(keyword) {
    setSearchParam({ keyword });
  }
  function onKeywordChange(keyword) {
    handleSearch(keyword);
  }

  const filteredPabriks = listPabriks.filter((pabrik) => {
    return pabrik.address.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) return <LoadingFetch />;

  return (
    <>
      <SearchBarPabrik pabrik={listPabriks} keyword={keyword} keywordChange={onKeywordChange} />
      <div className="row">
        {filteredPabriks &&
          filteredPabriks.map((pabrik) => {
            return (
              <div key={pabrik.id} className="col-lg-6 col-md-12 mb-5">
                <div className="card mb-5 h-100 card--toko" style={{ maxWidth: "100%" }}>
                  <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                      <img src={pabrik.image} className="img-fluid p-3" alt="Foto toko" style={{ height: "200px", width: "300px", borderRadius: "20px" }} />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title" style={{ textTransform: "capitalize" }}>
                          {pabrik.name}
                        </h5>
                        <p>Pemilik: {pabrik.user_name}</p>
                        <hr />
                        <p className="card-text">Alamat: {pabrik.address}</p>
                        <p className="d-flex ">
                          <Link to={`/pabrik/${pabrik.id}`}>
                            <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className=" btn btn-success">
                              Selengkapnya
                            </motion.button>
                          </Link>
                        </p>
                      </div>
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
              whileHover={{ scale: 1.1 }}
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
              whileHover={{ scale: 1.1 }}
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
      </div>
    </>
  );
};

export default Pabrik;
