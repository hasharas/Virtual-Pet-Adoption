import React from 'react';

const AddPetForm = () => {
      return (
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
                  <h2 className='text-2xl font-popin font-semibold mb-6 text-center text-gray-700'>Add a New Pet</h2>
                  <form action="" className='space-y-4'>
                        <div>
                              <label htmlFor="petName" className='block text-gray-600 mb-1' >Pet Name:</label>
                              <input
                                    type="text"
                                    id="petName"
                                    name="petName"
                                    placeholder="Enter pet name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                        </div>
                        <div>
                              <label htmlFor="petType" className='block text-gray-600 mb-1'>age:</label>
                              <input
                                    type='number'
                                    id="petType"
                                    name="petType"
                                    placeholder="Enter pet age"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                        </div>
                        <div>
                              <label htmlFor="petSpecies " className='block text-gray-600 mb-1'>Species:</label>
                              <input
                                    type="text"
                                    id="petSpecies"
                                    name="petSpecies"
                                    placeholder="Enter pet species"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                        </div>
                        <div>
                              <label htmlFor="petPersonality" className='block text-gray-600 mb-1'>Personality:</label>
                              <input
                                    type="text"
                                    id="petPersonality"
                                    name="petPersonality"
                                    placeholder="Enter pet personality"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                        </div>
                        <div>
                              <label htmlFor="petMood" className='block text-gray-600 mb-1'>Mood:</label>
                              <input
                                    type="text"
                                    id="petMood"
                                    name="petMood"
                                    placeholder="Enter pet mood"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                              <label htmlFor="adoptionDate" className='block text-gray-600 mb-1'>Adoption Date:</label>
                              <input
                                    type="date"
                                    id="adoptionDate"
                                    name="adoptionDate"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Add Pet
                        </button>
                  </form>
            </div>
      );
}

export default AddPetForm;


