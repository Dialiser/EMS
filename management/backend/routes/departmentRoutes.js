const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Get all departments
router.get('/', (req, res) => {
  db.all('SELECT * FROM departments', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Add a new department
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const query = 'INSERT INTO departments (name, description) VALUES (?, ?)';
  db.run(query, [name, description], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;
