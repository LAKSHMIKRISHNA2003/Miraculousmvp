import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://miraculousmvp.com/api/v1" // Production URL
    : "http://localhost:3000/api/v1";   // Development URL

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
