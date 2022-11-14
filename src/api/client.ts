import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key": "live_ED5VCWlsRHfytARx3aQkJ8kd75KEKEO3z069IHDAnm4hkhRZpboAhFFaVyDt2AsA",
  },
});
