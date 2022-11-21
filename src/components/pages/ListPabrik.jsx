import React, { useEffect, useState } from "react";
import { BASE_URL, config } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";

const ListPabrik = () => {
  const [pabriks, setPabriks] = useState();

  async function getToko() {
    try {
      let res = await axios.get(`${BASE_URL}/pabrik`);
      setPabriks(res.data.data.data);
      console.log(res.data.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getToko();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${BASE_URL}/pabrik/${id}`, config)
      .then((res) => {
        console.log(res);
        Swal.fire("Berhasil", "Pabrik sudah dihapus", "success");
        getToko();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>List Pabrik</h2>
      <div className="table-responsive" id="tabel-pabrik">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Foto Toko</th>
              <th scope="col">Nama Toko</th>
              <th scope="col">Alamat</th>
              <th scope="col">Pemilik Toko</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pabriks?.map((pabrik) => {
              return (
                <tr key={pabrik.id}>
                  <td>{pabrik.id}</td>
                  <td>
                    <img src={pabrik.image} width={"100px"} height={"100px"} alt="foto pabrik" />
                  </td>
                  <td>{pabrik.name}</td>
                  <td>{pabrik.address}</td>
                  <td>{pabrik.user_name}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button onClick={() => handleDelete(pabrik.id)} className="btn btn-danger">
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

export default ListPabrik;
