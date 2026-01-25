import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// SQLite DB (absolute path = no confusion)
const db = new Database(path.join(__dirname, "bookings.db"));

// Create table
db.prepare(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    projectSpecification TEXT,
    selectedDate TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// CREATE booking
app.post("/api/bookings", (req, res) => {
  const { fullName, email, phone, projectSpecification, selectedDate } = req.body;

  db.prepare(`
    INSERT INTO bookings (fullName, email, phone, projectSpecification, selectedDate)
    VALUES (?, ?, ?, ?, ?)
  `).run(fullName, email, phone, projectSpecification, selectedDate);

  res.json({ success: true });
});

// READ bookings
app.get("/api/bookings", (req, res) => {
  const rows = db
    .prepare("SELECT * FROM bookings ORDER BY createdAt DESC")
    .all();
  res.json(rows);
});

// DELETE booking
app.delete("/api/bookings/:id", (req, res) => {
  const { id } = req.params;

  const result = db
    .prepare("DELETE FROM bookings WHERE id = ?")
    .run(id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Booking not found" });
  }

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
