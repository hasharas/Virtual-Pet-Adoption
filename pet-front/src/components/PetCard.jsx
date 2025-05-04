import React from 'react';
import { adoptPet, deletePet } from '../services/api';
import { toast } from 'react-toastify';

const PetCard = ({ pet, onPetsChange }) => {

      const handleAdopt = async () => {
            try {
                  await adoptPet(pet._id);
                  onPetsChange();
            } catch (error) {
                  toast.error('Failed to adopt pet');
            }
      };

      const handleDelete = async () => {
            try {
                  await deletePet(pet._id);
                  onPetsChange();
            } catch (error) {
                  toast.error('Failed to delete pet');
            }
      };


      return (
            <div className="bg-blue-50 border border-blue-300 rounded-xl shadow-md hover:shadow-lg transition-opacity p-6 flex flex-col justify-between">
                  <div>
                        <h3 className="font-semibold text-xl mb-2 text-gray-800">Name : {pet.name}</h3>
                        <p className="text-gray-600 mb-1"> <span className="font-medium text-black">Age :</span> {pet.age}</p>
                        <p className="text-gray-600 mb-1"> <span className="font-medium">Species :</span> {pet.species}</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Personality :</span> {pet.personality}</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Mood :</span> {pet.mood}</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Adoption Date :</span> {pet.adoption_date}</p>
                  </div>
                  <div className="flex  justify-between mt-4 space-x-2">
                        <button onClick={handleAdopt} className="flex justify-center w-20 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors">Adopt</button>
                        <button onClick={handleDelete} className="flex justify-center w-20 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors">Delete</button>
                  </div>
            </div>
      );
}

export default PetCard;
