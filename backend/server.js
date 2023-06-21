const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer');
var mongoose = require('mongoose')
const contactInfo = require('./models/contactInfo')
const feedbackInfo = require('./models/feedbackInfo')
const productInfo = require('./models/productInfo')
const estimateInfo = require('./models/estimateInfo')
const PORT = 8080
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.yxiprfk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("mongodb connected"))
  .catch(err => console.log(error));



app.post('/postContactInfo', async (req, res) => {
  let name = req.body.name
  let phone = req.body.phone
  let email = req.body.email
  let city = req.body.city

  let contact = new contactInfo()

  contact.name = name
  contact.phone = phone
  contact.email = email
  contact.city = city

  await contact.save();
})
app.post('/postFeedbackInfo', async (req, res) => {
  let firstName = req.body.firstName
  let secondName = req.body.secondName
  let phone = req.body.phone
  let email = req.body.email
  let description = req.body.description

  let feedback = new feedbackInfo()

  feedback.firstName = firstName
  feedback.secondName = secondName
  feedback.phone = phone
  feedback.email = email
  feedback.description = description

  await feedback.save();
})
app.post('/postxyz', async (req, res) => {
  let productName = req.body.productName
  let brand = req.body.brand
  let size = req.body.size
  let price = req.body.price
  let finish = req.body.finish
  let quality = req.body.quality
  let coverage = req.body.coverage
  let color = req.body.color



  let product = new productInfo()

  product.productName = productName
  product.brand = brand
  product.size = size
  product.price = price
  product.finish = finish
  product.quality = quality
  product.coverage = coverage
  product.color = color


  await product.save();
  res.send('Hello world')
})


app.post('/postabc', async (req, res) => {
  let city = req.body.city
  let space = req.body.space
  let bhk = req.body.bhk
  let carpetArea = req.body.carpetArea

  let estimate = new estimateInfo()

  estimate.city = city
  estimate.space = space
  estimate.bhk = bhk
  estimate.carpetArea = carpetArea

  await estimate.save();
  res.send('Hello world')
})


app.get("/getProductInfo", async (req, res) => {
  try {
    const allData = await productInfo.find({});
    res.send({ status: "ok", data: allData });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log('Server is running...')
})
