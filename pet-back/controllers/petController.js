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
            res.status(500).json({ message: 'Error adding pet', error: error.message });
      }
}

