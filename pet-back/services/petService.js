import Pet from '../models/petModel.js';
import { getMood } from '../utils/moodLogic.js';

export const createPet = async (data) => {

      const pet = new Pet(data);
      await pet.save();
      if (!pet) throw new Error('Error creating pet');
      return pet;

};

export const getAllPets = async () => {

      const pets = await Pet.find();
      if (!pets || pets.length === 0) throw new Error('No pets found');
      return pets.map(pet => ({ ...pet.toObject(), mood: getMood(pet.createdAt) }));

};


export const getPetById = async (id) => {

      const pet = await Pet.findById(id);
      if (!pet) throw new Error('Pet not found');
      return pet;

}

export const updatePet = async (id, data) => {

      const pet = await Pet.findByIdAndUpdate(id, data, { new: true });
      if (!pet) throw new Error('Pet not found');
      return pet;

}

export const adoptPet = async (id) => {
      const pet = await Pet.findById(id);
      if (!pet) throw new Error('Pet not found');
      pet.adopted = true;
      pet.adoption_date = new Date();
      await pet.save();
      return pet;
};


export const deletePet = async (id) => {
      const pet = await Pet.findByIdAndDelete(id);
      if (!pet) throw new Error('Pet not found');
      return pet;
}


export const filterPetByMood = async (mood) => {

}