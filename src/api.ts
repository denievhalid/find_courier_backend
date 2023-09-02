import axios from "axios";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV } from "./constants";

const api = axios.create({
  baseURL: getEnvProperty(ENV.SMS_API_URL) as string,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default api;
