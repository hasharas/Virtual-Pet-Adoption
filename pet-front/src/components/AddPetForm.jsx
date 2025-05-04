import React, { useState } from 'react';
import { addPet } from '../services/api';

const AddPetForm = ({ onPetAdded }) => {


      const [petData, setPetData] = useState({
            name: "",
            age: "",
            species: "",
            personality: "",
            mood: "happy",
            adoption_date: ""
      });

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setPetData({
                  ...petData,
                  [name]: value
            });
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await addPet(petData);
                  onPetAdded(); // Call the function to update the pet list in the parent component // Refresh pet list after adding a new pet
                  setPetData({
                        name: "",
                        age: "",
                        species: "",
                        personality: "",
                        mood: "happy",
                        adoption_date: ""
                  });
                  console.log("Pet data submitted:", petData);
            } catch (error) {
                  console.error("Error adding pet:", error);
            }
      };

      return (
            <div className=" rounded-lg bg-slate-100 min-h-screen  mb-3 flex  justify-center sm:py-12">
                  <div className="max-w-lg w-full mx-5 p-8 mb-10 bg-white shadow-xl border border-blue-300 rounded-2xl mt-3 ">
                        <h2 className='text-2xl font-popin font-semibold mb-6 text-center text-gray-700'>Add a New Pet</h2>
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
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                          <option value="">Select Mood</option>
                                          <option value="happy">Happy</option>
                                          <option value="sad">Sad</option>

                                    </select>
                              </div>
                              <div className=''>
                                    <label htmlFor="adoption_date" className='block text-gray-600 mb-1'>Adoption Date</label>
                                    <input
                                          type="date"
                                          id="adoption_date"
                                          name="adoption_date"
                                          value={petData.adoption_date}
                                          onChange={handleInputChange}
                                          placeholder="Enter pet adoption date"
                                          required
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />
                              </div>

                              <button type="submit" className="bg-blue-500 font-popin w-full  hover:bg-blue-700 text-xl text-white font-bold py-4 px-4 rounded">
                                    Add Pet
                              </button>
                        </form>
                  </div>
            </div>
      );
}

export default AddPetForm;


