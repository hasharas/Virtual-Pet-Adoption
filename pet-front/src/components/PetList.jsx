
import React from 'react';
import PetCard from './PetCard';


// PetList component to display a list of pets
// It takes pets and onPetsChange as props
const PetList = ({ pets, onPetsChange }) => {
      return (
            <div className="bg-gradient-to-r flex-col from-white via-zinc-200 to-white rounded-lg py-6 flex justify-center sm:py-12">
                  <div>
                        <h2 className='text-3xl font-popin font-semibold mb-6 text-center text-gray-700'>Available <span className='text-blue-500 text-4xl'>Pets</span> </h2>
                  </div>

                  <div className="container mx-auto px-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pets.map(pet => (
                              <PetCard key={pet._id} pet={pet} onPetsChange={onPetsChange} />
                        ))}
                  </div>
            </div>
      );
}

export default PetList;
