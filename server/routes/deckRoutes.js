import express from "express";
import { getAllDecks, getDeckById, createDeck, updateDeck, deleteDeck } from "../controllers/deckControllers.js";

const router = express.Router();

// Route to get all decks
router.get("/", getAllDecks);
// Route to get a specific deck by ID
router.get("/:id", getDeckById);
// Route to create a new deck
router.post("/", createDeck);
// Route to update a deck by ID
router.put("/:id", updateDeck);
// Route to delete a deck by ID
router.delete("/:id", deleteDeck);

export default router;