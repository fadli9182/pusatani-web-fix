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

const config = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

export { getAccessToken, deleteToken, putAccessToken, putUser, getUser, config };
