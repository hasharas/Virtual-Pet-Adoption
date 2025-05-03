import Pet from '../models/petModel.js';
import { getMood } from '../utils/moodLogic.js';

export const createPet = async (data) => {
      try {
            const pet = new Pet(data);
            await pet.save();
            return pet;
      } catch (error) {
            throw new Error('Error creating pet: ' + error.message);
      }
};

export const getAllPets = async () => {
      try {
            const pets = await Pet.find();
            return pets.map(pet => ({ ...pet.toObject(), mood: getMood(pet.createdAt) }));
      } catch (error) {
            throw new Error('Error retrieving pets: ' + error.message);
      }
};


export const getPetById = async (id) => {
      try {
            const pet = await Pet.findById(id);
            if (!pet) throw new Error('Pet not found');
            return pet;
      } catch (error) {
            throw new Error('Error retrieving pet: ' + error.message);
      }
}


