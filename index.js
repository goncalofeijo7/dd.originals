const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const app = express()



app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})

const port = 4000


app.listen(port, () => {
    console.log('Listenning...')
})