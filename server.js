const express = require("express")
const app = express()
const crypto = require('crypto');

const PORT = process.env.PORT || 3000
let works = true;

app.get('/host_id', (req, res) => {
    if (works) res.send(crypto.randomUUID())
    else res.send("ERROR")
})

app.get('/change', (req, res) => {
    works = !works
    res.send('Changed')
})

app.get('/health', (req, res) => {
    if (works) res.send('Works').sendStatus(200)
    else res.send("Doesn't work").sendStatus(300)
})  

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})