import axios from "axios";

const API_URL = "http://localhost:5000/api/clients";

export const fetchClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.error("Error fetching clients:", err);
    return [];
  }
};
