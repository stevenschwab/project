require('dotenv').config();

const express = require('express')

const server = express()

server.use(express.json())

server.get('/hello', (req, res) => {
    res.json('hello, there')
})

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})