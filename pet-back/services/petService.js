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
      const pets = await Pet.find();
      return pets.map(pet => ({ ...pet.toObject(), mood: getMood(pet.createdAt) }));
};
