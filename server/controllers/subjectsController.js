import { sql } from "../config/db.js";

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await sql`SELECT * FROM subjects ORDER BY name DESC`;
        res.status(200).json({ success: true, data: subjects });
    } catch (error) {
        console.error("Error fetching subjects:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}