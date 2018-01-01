import axios from "axios";

const request = axios.create({
  baseUrl: "https://foodics.com/api/v2/",
  headers: {
    // TODO: lock this file from external viewing.
    "X-business": "BUSINESS_HID_HERE",
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default request;
