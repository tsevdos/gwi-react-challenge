import axios from "axios";

//  REST API client configuration
export const client = axios.create({
  headers: {
    "x-api-key": "live_ED5VCWlsRHfytARx3aQkJ8kd75KEKEO3z069IHDAnm4hkhRZpboAhFFaVyDt2AsA",
  },
});
