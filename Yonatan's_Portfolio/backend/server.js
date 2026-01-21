import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import bcrypt from "bcrypt";

const app = express();
const db = new Database("bookings.db");

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE TABLES
========================= */

// Users table
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    passwordHash TEXT,
    role TEXT DEFAULT 'user',
    createdAt TEXT
  )
`).run();

// Bookings table
db.prepare(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT,
    phone TEXT,
    projectSpecification TEXT,
    selectedDate TEXT,
    createdAt TEXT
  )
`).run();

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Backend with auth is running");
});

/* =========================
   AUTH ROUTES
========================= */

// SIGN UP
app.post("/api/auth/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.prepare(`
      INSERT INTO users (fullName, email, passwordHash, createdAt)
      VALUES (?, ?, ?, ?)
    `).run(fullName, email, hashedPassword, new Date().toISOString());

    res.status(201).json({ success: true });
  } catch (err) {
    if (err.code === "SQLITE_CONSTRAINT") {
      return res.status(409).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Signup failed" });
  }
});

// LOGIN
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);

  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
});

/* =========================
   BOOKINGS ROUTES
========================= */

app.post("/api/bookings", (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      projectSpecification,
      selectedDate,
    } = req.body;

    db.prepare(`
      INSERT INTO bookings
      (fullName, email, phone, projectSpecification, selectedDate, createdAt)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      fullName,
      email,
      phone,
      projectSpecification,
      selectedDate,
      new Date().toISOString()
    );

    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// VIEW BOOKINGS (admin later)
app.get("/api/bookings", (req, res) => {
  const rows = db.prepare("SELECT * FROM bookings").all();
  res.json(rows);
});

/* =========================
   START SERVER
========================= */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
