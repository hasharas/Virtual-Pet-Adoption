import express from 'express';
import * as petController from '../controllers/petController.js';

const router = express.Router();

router.post('/', petController.addPet);
router.get('/', petController.getAllPets);
router.get('/filter', petController.filterPetByMood);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);
router.patch('/:id/adopt', petController.adoptPet);


export default router;