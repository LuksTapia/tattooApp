import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://646552ba9c09d77a62e9a176.mockapi.io/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargar(email,permiso) {
    try {
      const response = await apiClient.get("/turns");
    
      if(permiso !== 'admin'){
        return response.data.filter(x => x.user.email === email)
      }
      return response.data;
      
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async getById(id) {
    try {
      const response = await apiClient.get("/turns/" + id);
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async agregar(elem) {
    try {
      await apiClient.post("/turns", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminar(id) {
    try {
      await apiClient.delete("/turns/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificar(id, elem) {
    try {
    await apiClient.put("/turns/" + id, elem)
    } catch (error) {
    throw "Error de conexion"
    }
    },
};