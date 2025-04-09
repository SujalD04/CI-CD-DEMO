const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

router.get('/error', (req, res) => {
    res.json({ message: 'Something broke gng 💔 '});
  throw new Error('Something broke!');
});

module.exports = router;
