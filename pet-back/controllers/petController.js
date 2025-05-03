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

export const updatePet = async (req, res) => {
      try {
            const pet = await petService.updatePet(req.params.id, req.body);
            res.json({
                  status: 'success',
                  message: 'Pet updated successfully',
                  data: pet,
            })
      } catch (error) {
            res.status(404).json({ message: 'Error updating pet', error: error.message });
      }
}

export const adoptPet = async (req, res) => {
      try {
            const pet = await petService.adoptPet(req.params.id);
            res.status(200).json({
                  status: 'success',
                  message: 'Pet adopted successfully',
                  data: pet,
            });
      } catch (error) {
            res.status(404).json({ message: "Error adopting pet", error: error.message });
      }
}

export const deletePet = async (req, res) => {
      try {
            const pet = await petService.deletePet(req.params.id);
            res.status(200).json({
                  status: 'success',
                  message: 'Pet  deleted successfully',
                  data: pet,
            });
      } catch (error) {
            res.status(404).json({ message: 'Error deleting pet', error: error.message });
      }
}


export const filterPetByMood = async (req, res) => {
      try {
            const pets = await petService.filterPetByMood(req.query.mood);
            res.status(200).json({
                  status: 'success',
                  message: 'Pets filtered successfully',
                  data: pets,
            });

      } catch (error) {
            res.status(404).json({ message: 'Error filtering pets', error: error.message });

      }
}