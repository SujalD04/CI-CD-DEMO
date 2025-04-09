const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

router.get('/error', (req, res) => {
  throw new Error('Something broke!');
});

module.exports = router;
