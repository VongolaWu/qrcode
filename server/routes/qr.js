const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const db = require('../database');

// API to create a new QR code
router.post('/create', (req, res) => {
  console.log("Received request:", req.body);
  const { name, info } = req.body;

  // Generate QR Code
  QRCode.toDataURL(JSON.stringify({ name, info }), (err, qrCode) => {
    if (err) {
      res.status(500).send('Error generating QR Code');
      return;
    }

    // Save to the database
    db.run('INSERT INTO devices (name, info, qrCode) VALUES (?, ?, ?)', [name, info, qrCode], function(err) {
      if (err) {
        res.status(500).send('Error saving to database');
        return;
      }

      // Send back the generated QR Code
      res.send({ id: this.lastID, qrCode });
    });
  });
});

module.exports = router;
