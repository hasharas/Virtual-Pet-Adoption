import * as petService from '../services/petService.js';


export const addPet = async (req, res) => {
      try {
            const petData = req.body;
            const newPet = await petService.createPet(petData);
            res.status(201).json({
                  status: 'success',
                  message: 'Pet added successfully',
                  data: newPet,
            });
      } catch (error) {
            res.status(500).json({ message: 'Error adding pet', error: error.message });
      }
}

