export const BASE_URL = "http://127.0.0.1:8000/api";

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
