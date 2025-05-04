import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { updatePet } from '../services/api';

const EditPetForm = ({ pet, onClose, onPetsChange }) => {

      // Check if the pet is already adopted
      const [petData, setPetData] = useState({
            name: pet.name,
            age: pet.age,
            species: pet.species,
            personality: pet.personality,
            mood: pet.mood,
            adoption_date: pet.adoption_date
      });

      //handle input change
      const handleInputChange = e => setPetData({ ...petData, [e.target.name]: e.target.value });

      //update pet data
      const handleSubmit = async e => {
            e.preventDefault();
            try {
                  await updatePet(pet._id, petData);
                  console.log("Pet data submitted:", petData);
                  onPetsChange();
                  onClose();
            } catch (error) {
                  toast.error('Failed to update pet');
                  console.log("Error updating pet:", error);
            }
      };

      return (
            <div className=" rounded-3xl bg-gradient-to-r from-white via-zinc-300 to-white  flex  justify-center  ">
                  <div className="max-w-lg w-full p-8 my-0 sm:my-4 md:my-6 lg:my-8 bg-white shadow-xl border border-blue-300 rounded-3xl">

                        <h2 className='text-2xl font-popin font-semibold mb-6 text-center text-gray-700'>Add a New <span className='text-blue-500 text-3xl'>Pet</span> </h2>
                        <form action="" onSubmit={handleSubmit} className='space-y-4'>
                              <div>
                                    <label htmlFor="name" className='block text-gray-600 mb-1' >Pet Name</label>
                                    <input
                                          type="text"
                                          id="name"
                                          name="name"
                                          value={petData.name}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet name"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                              </div>
                              <div>
                                    <label htmlFor="age" className='block text-gray-600 mb-1'>Age</label>
                                    <input
                                          type='number'
                                          id="age"
                                          name="age"
                                          value={petData.age}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet age"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                              </div>
                              <div>
                                    <label htmlFor="species " className='block text-gray-600 mb-1'>Species</label>
                                    <input
                                          type="text"
                                          id="species"
                                          name="species"
                                          value={petData.species}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet species"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                              </div>
                              <div>
                                    <label htmlFor="personality" className='block text-gray-600 mb-1'>Personality</label>
                                    <input
                                          type="text"
                                          id="personality"
                                          name="personality"
                                          value={petData.personality}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet personality"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                              </div>
                              <div>
                                    <label htmlFor="mood" className='block text-gray-600 mb-1'>Mood</label>
                                    <select
                                          name="mood"
                                          id="mood"
                                          value={petData.mood}
                                          onChange={handleInputChange}
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                                          <option value="">Select Mood</option>
                                          <option value="happy">Happy</option>
                                          <option value="sad">Sad</option>
                                          <option value="excited">Excited</option>

                                    </select>
                              </div>
                              <div className=''>
                                    <label htmlFor="adoption_date" className='block text-gray-600 mb-1'>Adoption Date</label>
                                    <input
                                          type="number"
                                          id="adoption_date"
                                          name="adoption_date"
                                          value={petData.adoption_date}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet adoption date"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />
                              </div>
                              <div className="flex justify-end gap-2 mt-2">
                                    <button onClick={onClose} type="submit" className="bg-red-500 font-popin w-full  hover:bg-red-700 text-xl text-white font-bold py-4 px-4 rounded">
                                          Cancel
                                    </button>

                                    <button type="submit" className="bg-blue-500 font-popin w-full  hover:bg-blue-700 text-xl text-white font-bold py-4 px-4 rounded">
                                          Save
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default EditPetForm;
