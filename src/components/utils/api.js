export const BASE_URL = "http://pusatani.masuk.web.id/api";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function deleteToken() {
  return localStorage.clear();
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

export { getAccessToken, deleteToken, putAccessToken };
