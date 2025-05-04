
import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, onPetsChange }) => {
      return (
            <div className="bg-slate-100 rounded-lg py-6 flex  justify-center sm:py-12">
                  <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pets.map(pet => (
                              <PetCard key={pet._id} pet={pet} onPetsChange={onPetsChange} />
                        ))}
                  </div>
            </div>
      );
}

export default PetList;
