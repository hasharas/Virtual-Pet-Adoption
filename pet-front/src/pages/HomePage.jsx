import React, { useState, useEffect } from 'react';
import AddPetForm from '../components/AddPetForm.jsx';
import { getAllPets } from '../services/api.js';
import PetList from '../components/PetList.jsx';

const HomePage = () => {

      const [pets, setPets] = useState([]);

      const fetchPets = async () => {
            try {
                  const response = await getAllPets();
                  setPets(response.data);
            } catch (error) {
                  console.error("Error fetching pets:", error);
            }
      }

      useEffect(() => {
            fetchPets();
      }, []);

      return (
            <div className="container   mx-auto p-4">
                  <h1 className="text-3xl font-bold mb-4 font-popin p-4 bg-slate-100 rounded-lg text-center">Pet Adoption Center</h1>
                  <AddPetForm onPetAdded={fetchPets} />
                  <PetList pets={pets} onPetsChange={fetchPets} />
            </div>
      );
}

export default HomePage;
