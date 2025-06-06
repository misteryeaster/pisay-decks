import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import subjectsRoutes from './routes/subjectsRoutes.js';
import flashcardsRoutes from './routes/flashcardsRoutes.js';
import deckRoutes from './routes/deckRoutes.js';

import { sql } from './config/db.js';
import { aj } from './lib/arcjet.js';


dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(helmet()); // Security middleware to set various HTTP headers
app.use(morgan('dev')); // Logging middleware to log HTTP requests

// Middleware to handle rate limiting and bot detection
app.use(async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Rate limit exceeded" });
            } else if (decision.reason.isBot()) {
                return res.status(403).json({ error: "Bot detected" });
            } else {
                return res.status(403).json({ error: "Access denied" });
            }
            return
        } else if (decision.reason.isBot() && decision.reason.isSpoofed()) {
            return res.status(403).json({ error: "Spoofed bot detected" });
        }

        next();
    } catch (error) {
        console.log("Arcjet error:", error);
        next(error);
    }
})

app.use("/api/subjects", subjectsRoutes);
app.use("/api/decks", deckRoutes);
app.use("/api/flashcards", flashcardsRoutes);

async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,             
            email TEXT UNIQUE NOT NULL,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            nickname TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )`;

        await sql`CREATE TABLE IF NOT EXISTS subjects (
            name TEXT PRIMARY KEY NOT NULL 
        )`;

        await sql`CREATE TABLE IF NOT EXISTS decks (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            subject_name TEXT NOT NULL REFERENCES subjects(name) ON DELETE CASCADE,
            user_id SERIAL NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            grade_level int NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )`;

        await sql`CREATE TABLE IF NOT EXISTS flashcards (
            id SERIAL PRIMARY KEY,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            deck_id SERIAL NOT NULL REFERENCES decks (id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )`;

        

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});