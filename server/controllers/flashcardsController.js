import { sql } from "../config/db.js";

//CRUD operations for flashcards
export const getAllFlashcards = async (req, res) => {
    try {
        const flashcards = await sql`SELECT * FROM flashcards
        ORDER BY created_at DESC`;

        console.log("Fetched flashcards:", flashcards);
        res.status(200).json({ success: true, data: flashcards });
    } catch (error) {
        console.error("Error fetching flashcards:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const createFlashcards = async (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: "Question and answer are required" });
    }

    try {
        const newFlashcard = await sql`INSERT INTO flashcards (question, answer) 
        VALUES (${question}, ${answer}) RETURNING *`;

        res.status(201).json({ success: true, data: newFlashcard[0] });
    } catch (error) {
        console.error("Error creating flashcard:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateFlashcards = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    try {
        const updateFlashcard = await sql`UPDATE flashcards
        SET question = ${question}, answer = ${answer}, updated_at = NOW()
        WHERE id = ${id} RETURNING *`;

        if (updateFlashcard.length === 0) {
            return res.status(404).json({ success: false, message: "Flashcard not found" });
        }

        res.status(200).json({ success: true, data: updateFlashcard });
    } catch (error) {
        console.error("Error updating flashcard:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteFlashcards = async (req, res) => { 
    const { id } = req.params;

    try {
        const deleteFlashcard = await sql`DELETE FROM flashcards WHERE id = ${id} RETURNING *`;

        if (deleteFlashcard.length === 0) {
            return res.status(404).json({ success: false, message: "Flashcard not found" });
        }

        res.status(200).json({ success: true, data: deleteFlashcard });
    } catch (error) {
        console.error("Error deleting flashcard:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};