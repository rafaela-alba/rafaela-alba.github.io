const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const path = require('path')

app.use(express.static('style.css'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
})

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.post('/customer', db.addCustomer)
app.post('/cart', db.addCartItem)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})