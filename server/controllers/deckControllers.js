import { sql } from '../config/db.js';

export const getAllDecks = async (req, res) => {
    try {
        const decks = await sql`SELECT * FROM decks ORDER BY created_at DESC`;
        res.status(200).json({ success: true, data: decks });
    } catch (error) {
        console.error("Error fetching decks:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getDeckById = async (req, res) => {
    const { id } = req.params;

    try {
        const deck = await sql`SELECT * FROM decks WHERE id = ${id}`;

        if (deck.length === 0) {
            return res.status(404).json({ success: false, message: "Deck not found" });
        }

        res.status(200).json({ success: true, data: deck[0] });
    } catch (error) {
        console.error("Error fetching deck:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

export const createDeck = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Deck name is required" });
    }

    try {
        const newDeck = await sql`INSERT INTO decks (name) VALUES (${name}) RETURNING *`;

        res.status(201).json({ success: true, data: newDeck[0] });
    } catch (error) {
        console.error("Error creating deck:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const updateDeck = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedDeck = await sql`UPDATE decks SET name = ${name}, updated_at = NOW() WHERE id = ${id} RETURNING *`;

        if (updatedDeck.length === 0) {
            return res.status(404).json({ success: false, message: "Deck not found" });
        }

        res.status(200).json({ success: true, data: updatedDeck[0] });
    } catch (error) {
        console.error("Error updating deck:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteDeck = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDeck = await sql`DELETE FROM decks WHERE id = ${id} RETURNING *`;

        if (deletedDeck.length === 0) {
            return res.status(404).json({ success: false, message: "Deck not found" });
        }

        res.status(200).json({ success: true, data: deletedDeck[0] });
    } catch (error) {
        console.error("Error deleting deck:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}   