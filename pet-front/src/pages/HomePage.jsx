import React, { useState, useEffect } from 'react';
import AddPetForm from '../components/AddPetForm.jsx';
import { getAllPets } from '../services/api.js';

const HomePage = () => {

      const [pets, setPets] = useState([]);

      const fetchPets = async () => {
            try {
                  const data = await getAllPets();
                  setPets(data);

            } catch (error) {
                  console.error("Error fetching pets:", error);
            }
      }

      useEffect(() => {
            fetchPets();
      }, []);

      return (
            <div className="container mx-auto p-4">
                  <AddPetForm onPetAdded={fetchPets} />
            </div>
      );
}

export default HomePage;
