require("dotenv").config();
const express = require('express')
const cors = require('cors')
const connectDB = require ('./config/db')


connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', require('./routes/developerRoute'))
console.log('Mounted /api routes');

app.get('/api/test', (req, res) => res.send('API test OK'));


// API Health Check
app.get("/api/status", (req, res) => {
    res.json({ status: "ok", message: "Backend is running successfully!" });
});

const PORT = process.env.PORT || 8001
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});






