import express from "express";
import { getAllDecks, createDeck, updateDeck, deleteDeck } from "../controllers/deckController.js";

const router = express.Router();

// Route to get all decks
router.get("/", getAllDecks);
// Route to create a new deck
router.post("/", createDeck);
// Route to update a deck by ID
router.put("/:id", updateDeck);