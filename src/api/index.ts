import axios from "axios";

export const api = axios.create({
  baseURL: "https://milksajo.shop",
  headers: {
    "Content-Type": "application/json",
  },
});
