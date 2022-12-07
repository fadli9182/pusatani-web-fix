import React from "react";

const SearchBarPabrik = ({ keyword, keywordChange }) => {
  return (
    <div className="p-2 d-flex flex-column gap-2">
      <label htmlFor="">Cari Berdasarkan Alamat</label>
      <input className="form-control" type="text" placeholder="Masukan Alamat" value={keyword} onChange={(e) => keywordChange(e.target.value)} />
      <hr />
    </div>
  );
};

export default SearchBarPabrik;
