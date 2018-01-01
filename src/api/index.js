import request from "./request";

function handleError(e) {
  const status = e.response.status;

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
        secret: "INSERT_SECRET_HERE"
      }
    })
    .then(res => res.data)
    .catch(e => handleError(e));
}
