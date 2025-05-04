import axios from "axios";
import { toast } from "react-toastify";


const API = axios.create({
      baseURL: "http://localhost:5000/pets",
});

//get all pets
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

//get pet by id
export const getPetById = async (id) => {
      try {
            const response = await API.get(`/${id}`);
            return response.data;
      } catch (error) {
            toast.error('Error fetching pet');
            throw error;
      }
};

//add a new pet
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

//update pet by id
export const updatePet = async (id, petData) => {
      try {
            const response = await API.put(`/${id}`, petData);
            toast.success('Pet updated successfully');
            return response.data;
      } catch (error) {
            toast.error('Error updating pet');
            throw error;
      }
};

//adopt pet by id
export const adoptPet = async (id) => {
      try {
            const response = await API.patch(`/${id}/adopt`);
            toast.success('Pet adopted!');
            return response.data;
      } catch (error) {
            toast.error('Error adopting pet');
            throw error;
      }
};

//delete pet by id
export const deletePet = async (id) => {
      try {
            await API.delete(`/${id}`);
            // toast.success('Pet deleted');
      } catch (error) {
            toast.error('Error deleting pet');
            throw error;
      }
};

//filter pets by mood
export const filterPets = async (mood) => {
      try {
            const response = await API.get(`/filter?mood=${mood}`);
            return response.data;
      } catch (error) {
            toast.error('Error filtering pets');
            throw error;
      }
};


