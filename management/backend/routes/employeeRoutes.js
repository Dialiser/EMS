const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Get all employees
router.get('/', (req, res) => {
  db.all('SELECT * FROM employees', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Add a new employee
router.post('/', (req, res) => {
  const { name, department, address } = req.body;
  const query = 'INSERT INTO employees (name, department, address) VALUES (?, ?, ?)';
  db.run(query, [name, department, address], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;
