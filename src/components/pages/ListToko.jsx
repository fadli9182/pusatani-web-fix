import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/api";
import axios from "axios";

const ListToko = () => {
  const [tokos, setTokos] = useState([]);

  async function getToko() {
    try {
      let res = await axios.get(`${BASE_URL}/toko`);
      setTokos(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getToko();
  }, []);

  return (
    <div>
      <h2>List Toko</h2>
      <div className="table-responsive" id="tabel-toko">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Foto KTP</th>
              <th scope="col">Nama Toko</th>
              <th scope="col">Alamat</th>
              <th scope="col">Pemilik Toko</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tokos.map((toko) => {
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
                      <button className="btn btn-danger">Hapus</button>
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
