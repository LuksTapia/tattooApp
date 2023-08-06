import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://646552ba9c09d77a62e9a176.mockapi.io/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargar() {
    try {
      const response = await apiClient.get("/users");
      return response.data;
      
    } catch (error) {
      throw "Error de conexion";
    }
  },
};