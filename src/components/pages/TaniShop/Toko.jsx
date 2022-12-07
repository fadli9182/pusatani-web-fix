/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBarToko from "./SearchBarToko";
import LoadingFetch from "../LoadingFetch";

const Toko = () => {
  const [loading, setLoading] = useState(false);
  const [listTokos, setListTokos] = useState([]);
  const [url, setUrl] = useState(`${BASE_URL}/toko?page=1`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchParam, setSearchParam] = useSearchParams();

  const keyword = searchParam.get("keyword") || "";
  function handleSearch(keyword) {
    setSearchParam({ keyword });
  }
  function onKeywordChange(keyword) {
    handleSearch(keyword);
  }

  async function getToko() {
    try {
      setLoading(true);
      let res = await axios.get(url);
      setListTokos(res.data.data.data);
      setNextUrl(res.data.data.next_page_url);
      setPrevUrl(res.data.data.prev_page_url);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getToko();
  }, [url]);

  const filteredToko = listTokos.filter((toko) => {
    return toko.address.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) return <LoadingFetch />;

  return (
    <>
      <SearchBarToko toko={listTokos} keyword={keyword} keywordChange={onKeywordChange} />
      <div className="row">
        {filteredToko &&
          filteredToko.map((toko) => {
            return (
              <div key={toko.id} className="col-lg-6 col-md-12 mb-4">
                <div className="card mb-5 card--toko" style={{ maxWidth: "100%" }}>
                  <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                      <img src={toko.image} className="img-fluid p-3" alt="Foto toko" style={{ height: "200px", width: "300px", borderRadius: "20px" }} />
                    </div>
                    <div className="col-md-7 text-center">
                      <div className="card-body">
                        <h5 className="card-title" style={{ textTransform: "capitalize" }}>
                          {toko.name}
                        </h5>
                        <p>Pemilik: {toko.user_name}</p>
                        <hr />
                        <p className="card-text">Alamat: {toko.address}</p>
                        <p className="d-flex justify-content-center">
                          <Link to={`/shop/${toko.id}`}>
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
                setListTokos([]);
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
                setListTokos([]);
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

export default Toko;
