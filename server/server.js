require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const connection = require('./db/db')

connection.connection;

app.use(express.json())
app.use(cors())

app.use(require('./routes/route'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`))