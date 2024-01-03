const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('QR Code Website is running!');
});

const db = require('./database');
const qrRoutes = require('./routes/qr');

app.use('/api/qr', qrRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});