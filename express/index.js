
const { response } = require('express')
const express = require('express')

const getData = require('./random')
const app = express()
const header = {
    'Content-type':'application/json'
}

// rutas
app.get('/',(req, res) => {
    res.send('parce to no devuelvo nada aca')
})
app.get('/api/users',(req, res) => {
    const result = getData.winner()
    res.json(result)
})

app.listen(8080, () => {
    console.log('server running', 8080)
})