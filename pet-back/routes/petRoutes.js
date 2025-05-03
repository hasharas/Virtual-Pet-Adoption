import express from 'express';
import * as petController from '../controllers/petController.js';

const router = express.Router();

router.post('/', petController.addPet);
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);


export default router;