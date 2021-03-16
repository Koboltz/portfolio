require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.listen(process.env.NODE_PORT, () => {
    console.log(`Listening at http://localhost:${process.env.NODE_PORT}`)
})