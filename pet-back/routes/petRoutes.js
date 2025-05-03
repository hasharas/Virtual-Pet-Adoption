import express from 'express';
import * as petController from '../controllers/petController.js';

//all routes thare , start with http://localhost:5000/pets

const router = express.Router();

router.post('/', petController.addPet);
router.get('/', petController.getAllPets);
router.get('/filter', petController.filterPetByMood);//allways get id to befor add mood one 
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);
router.patch('/:id/adopt', petController.adoptPet);


export default router;