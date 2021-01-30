require('dotenv').config()

const express = require('express')

const app = express()
const mongoose = require('mongoose')

const cors = require('cors')

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/square-by-post', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/', (req, res) => {
  res.send('navigate to /square-by-post and for json use postman app')
})

app.use(bodyParser.urlencoded({extended: false}))

app.post('/square-by-post', (req, res) => {
  var num = parseInt(req.body.num)
  var sq = num*num
  res.end(sq.toString())
})

app.post('/square-by-post-json', (req, res) => {
  response = {
    "sq1":(req.body.num1*req.body.num1),
    "sq2":(req.body.num2*req.body.num2),
    "sq3":(req.body.num3*req.body.num3)
  }
  res.end(JSON.stringify(response))
})

mongoose.connect('mongodb+srv://admin:Ioh5zxTOwHPP7YrB@cluster0.4o9zl.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.listen(3000, () => {
    console.log('server is running');
})
