import React, { useState, useEffect, useCallback } from 'react';
import AddPetForm from '../components/AddPetForm.jsx';
import { filterPets, getAllPets } from '../services/api.js';
import PetList from '../components/PetList.jsx';
import FilterBar from '../components/FilterBar.jsx';

const HomePage = () => {

      const [pets, setPets] = useState([]);
      const [filter, setFilter] = useState('');

      // Function to fetch pets based on the selected filter
      // Using useCallback to memoize the function and avoid unnecessary re-renders
      const fetchPets = useCallback(async () => {
            try {
                  const response = filter && filter !== 'All'
                        ? await filterPets(filter)
                        : await getAllPets();
                  setPets(response.data);
            } catch (error) {
                  console.error("Error fetching pets:", error);
            }
      }, [filter]);

      //this function is called when the component mounts and whenever the filter changes
      useEffect(() => {
            fetchPets();
      }, [fetchPets]);

      // Function to handle filter change from the FilterBar component
      const handleFilterChange = (selectedFilter) => {
            setFilter(selectedFilter);
      };


      return (
            <div className="container max-w-full  mx-auto p-4">
                  <h1 className="text-4xl font-bold mb-4 font-popin p-4 bg-gradient-to-r from-white via-zinc-200 to-white rounded-lg text-center"> <span className='text-blue-500 text-5xl'>Pet </span>Adoption  Center..</h1>
                  <AddPetForm onPetAdded={fetchPets} />
                  <FilterBar onFilterChange={handleFilterChange} activeFilter={filter} />
                  <PetList pets={pets} onPetsChange={fetchPets} />
            </div>
      );
}

export default HomePage;
