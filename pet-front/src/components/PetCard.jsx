import React, { useState } from 'react';
import { adoptPet, deletePet } from '../services/api';
import { toast } from 'react-toastify';
import { FaHeart, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import EditPetForm from './EditPetForm';

const PetCard = ({ pet, onPetsChange }) => {
      const [editOpen, setEditOpen] = useState(false);

      //adopt pet function
      const handleAdopt = async () => {
            try {
                  await adoptPet(pet._id);
                  onPetsChange();
            } catch (error) {
                  toast.error('Failed to adopt pet');
            }
      };
      //delete pet function
      const handleDelete = async () => {
            try {
                  await deletePet(pet._id);
                  toast.success(`${pet.name} deleted`);
                  onPetsChange();
            } catch (error) {
                  toast.error('Failed to delete pet');
            }
      };


      return (
            <>
                  <div className="bg-white border border-zinc-200 rounded-xl shadow-md hover:shadow-zinc-500 p-6 flex flex-col justify-between">

                        <div>
                              <h3 className="font-semibold text-xl mb-2 text-gray-800">Name : {pet.name}</h3>
                              <p className="text-gray-600 mb-1"> <span className="font-medium ">Age :</span> {pet.age}</p>
                              <p className="text-gray-600 mb-1"> <span className="font-medium">Species :</span> {pet.species}</p>
                              <p className="text-gray-600 mb-1"><span className="font-medium">Personality :</span> {pet.personality}</p>
                              <p className="text-gray-600 mb-1">

                                    <span className="font-medium pr-3">Mood :</span>
                                    <span className={`px-2 py-[2px] align-middle items-center rounded-full text-white 
                              ${pet.mood === 'happy'
                                                ? 'bg-green-500'
                                                : pet.mood === 'excited'
                                                      ? 'bg-red-500'
                                                      : pet.mood === 'sad'
                                                            ? 'bg-yellow-500'
                                                            : 'bg-gray-500'
                                          }`}> {pet.mood}</span>
                              </p>

                              <p className="text-gray-600 mb-1">
                                    <span className="font-medium">
                                          Status : {pet.adopted ? 'Adopted' : 'Available'}
                                    </span>
                              </p>


                        </div>
                        <div className="flex  justify-between mt-4 gap-2 space-x-2">
                              {!pet.adopted && (
                                    <button onClick={handleAdopt} className="flex justify-center items-center gap-2  w-24 bg-green-500 hover:bg-green-600 text-white font-popin  py-2 px-1 rounded-lg transition-colors">
                                          <FaHeart /> Adopt
                                    </button>
                              )}
                              <button onClick={() => setEditOpen(true)} className="flex justify-center items-center gap-2 w-20 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors">
                                    <FaEdit />   Edit
                              </button>
                              <button onClick={handleDelete} className="flex justify-center items-center gap-2 w-24 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors">
                                    <FaTrash />   Delete
                              </button>
                        </div>

                        {/* create a modal for edit pet form this allso can create like reuseble component but i didnt create th*/}

                        {editOpen && (
                              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-auto">
                                          <button
                                                onClick={() => setEditOpen(false)}
                                                className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-2xl"
                                          >
                                                <FaTimes />
                                          </button>
                                          <EditPetForm pet={pet} onClose={() => setEditOpen(false)} onPetsChange={onPetsChange} />
                                    </div>
                              </div>
                        )}

                  </div>
            </>
      );
}

export default PetCard;
