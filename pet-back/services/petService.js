import Pet from '../models/petModel.js';

export const createPet = async (data) => {
      try {
            const pet = new Pet(data);
            await pet.save();
            return pet;
      } catch (error) {
            throw new Error('Error creating pet: ' + error.message);
      }
}