import axios from "axios";
import { toast } from "react-toastify";


const API = axios.create({
      baseURL: "http://localhost:5000/pets",
});

export const getAllPets = async () => {
      try {
            const response = await API.get("/");
            console.log("Pets fetched successfully:", response.data);
            return response.data;
      } catch (error) {
            console.error("Error fetching pets:", error);
            toast.error("Failed to fetch pets. Please try again.");
            throw error;
      }
};


export const addPet = async (petData) => {
      try {
            const response = await API.post("/", petData);
            toast.success("Pet added successfully!");
            console.log("Pet added successfully:", response.data);
            return response.data;
      } catch (error) {
            console.error("Error adding pet:", error);
            toast.error("Failed to add pet. Please try again.");
            throw error;
      }
}