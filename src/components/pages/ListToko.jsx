import React, { useEffect, useState } from "react";
import { BASE_URL, config } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingFetch from "./LoadingFetch";

const ListToko = () => {
  const [tokos, setTokos] = useState();
  const [loading, setLoading] = useState(false);

  async function getToko() {
    try {
      let res = await axios.get(`${BASE_URL}/toko`);
      setTokos(res.data.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getToko();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      let res = await axios.delete(`${BASE_URL}/toko/${id}`, config);
      console.log(res.data.data);
      setLoading(false);
      Swal.fire("Berhasil", "Toko sudah dihapus", "success");
      getToko();
    } catch (e) {
      console.log(e);
      Swal.fire("Gagal", "Toko gagal dihapus", "error");
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingFetch />;
  }

  return (
    <div>
      <h2>List Toko</h2>
      <div className="table-responsive" id="tabel-toko">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Foto KTP</th>
              <th scope="col">Nama Toko</th>
              <th scope="col">Alamat</th>
              <th scope="col">Pemilik Toko</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tokos?.map((toko) => {
              return (
                <tr key={toko.id}>
                  <td>{toko.id}</td>
                  <td>
                    <img src={toko.image} width={"100px"} alt="foto toko" />
                  </td>
                  <td>{toko.name}</td>
                  <td>{toko.address}</td>
                  <td>{toko.user_name}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button onClick={() => handleDelete(toko.id)} className="btn btn-danger">
                        Hapus
                      </button>
                      <button className="btn btn-warning">Verifikasi</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToko;
