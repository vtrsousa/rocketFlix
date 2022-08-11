const express = require('express')
const app = express()
const axios = require('axios')

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen('3000', () => console.log('Server Funcionando'))