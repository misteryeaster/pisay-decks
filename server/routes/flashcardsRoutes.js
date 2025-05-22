import express from 'express';
import { getAllFlashcards, createFlashcards, updateFlashcards, deleteFlashcards, getFlashcardsById } from '../controllers/flashcardsController.js';

const router = express.Router();

router.get('/:deckId', getAllFlashcards);
router.get('/:deckId/:id', getFlashcardsById);  
router.post('/:deckId', createFlashcards);
router.put('/:deckId/:id', updateFlashcards);
router.delete('/:deckId/:id', deleteFlashcards);

export default router;