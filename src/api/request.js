import axios from "axios";
import { HID } from "./config";

const request = axios.create({
  baseUrl: "https://dev-dash.foodics.com/api/v2/",
  headers: {
    // TODO: lock this file from external viewing.
    "X-business": HID,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default request;
