const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('QR Code Website is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const db = require('./database');
const qrRoutes = require('./routes/qr');

app.use('/api/qr', qrRoutes);

const cors = require('cors');
app.use(cors());
