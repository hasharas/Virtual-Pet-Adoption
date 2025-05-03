import * as petService from '../services/petService.js';


export const addPet = async (req, res) => {
      try {

            const newPet = await petService.createPet(req.body);
            res.status(201).json({
                  status: 'success',
                  message: 'Pet added successfully',
                  data: newPet,
            });
      } catch (error) {
            res.status(400).json({ message: 'Error adding pet', error: error.message });
      }
};

export const getAllPets = async (req, res) => {
      try {
            const pets = await petService.getAllPets();
            res.status(200).json({
                  status: 'success',
                  message: 'Pets retrieved successfully',
                  data: pets,
            });
      } catch (error) {
            res.status(404).json({ message: 'Error retrieving pets', error: error.message });
      }

};

export const getPetById = async (req, res) => {
      try {
            const pet = await petService.getPetById(req.params.id);
            res.status(200).json({
                  status: 'success',
                  message: 'Pet retrieved successfully',
                  data: pet,
            });
      } catch (error) {
            res.status(404).json({ message: 'Error retrieving pet', error: error.message });
      }
}

