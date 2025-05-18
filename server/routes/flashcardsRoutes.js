import express from 'express';
import { getAllFlashcards, createFlashcards, updateFlashcards, deleteFlashcards } from '../controllers/flashcardsController.js';

const router = express.Router();

router.get('/', getAllFlashcards);
router.get('/:id', getAllFlashcards);
router.post('/', createFlashcards);
router.put('/:id', updateFlashcards);
router.delete('/:id', deleteFlashcards);

// router.get('/:deckId', getAllFlashcards);
// router.get('/:deckId/:id', getAllFlashcards);


export default router;