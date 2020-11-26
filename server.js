const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const companyRouter = require('./src/routes/company-list')

//database connection
mongoose.connect('mongodb://localhost:27017/companies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, function (error) {
  if (error) {
    console.log(error);
  }
});

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/companies', companyRouter)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server listening on port: ${port}`))