export const BASE_URL = "http://pusatani.masuk.web.id/api";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function deleteToken() {
  return localStorage.clear();
}

function putUser(user) {
  return localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

function putIdPabrik(id_pabrik) {
  return localStorage.setItem("id_pabrik", id_pabrik);
}

function putIdToko(id_toko) {
  return localStorage.setItem("id_toko", id_toko);
}

const config = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

export { getAccessToken, deleteToken, putAccessToken, putUser, getUser, config, putIdPabrik, putIdToko };
