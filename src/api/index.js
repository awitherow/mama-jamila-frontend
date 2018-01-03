import request from "./request";
import { secret } from "./config";

function handleError(e) {
  const { status } = e;

  if (status === 400 || status === 401 || status === 404) {
    return "Request invalid, please force quit the app and try again.";
  }

  if (status === 409) {
    return "Can you please try to limit your requests? It is breaking the servers...";
  }

  if (status === 500 || status === 503) {
    return "Server is in maintenance, please try again later!";
  }
}

export function getFoodicsAuthToken() {
  request
    .get("token", {
      data: {
        secret
      }
    })
    .then(res => res.token)
    .catch(e => handleError(e));
}

export function getFoodicsProducts(token) {
  request
    .get("token", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        secret
      }
    })
    .then(res => res.products)
    .catch(e => handleError(e));
}
