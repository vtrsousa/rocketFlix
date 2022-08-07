const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen('3000', () => console.log('Server Funcionando'))