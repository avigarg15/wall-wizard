const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  productName: {
    type: String,
    // required: true,
  },
  brand: {
    type: String,
    // required: true,
  },
  size: {
    type: String,
    enum: ['1kg', '2kg', '5kg', '10kg', '20kg'],
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  finish: {
    type: String,
    // required: true,
  },
  quality: {
    type: String,
    enum: ['economy', 'standard', 'advance'],
    // required: true,
  },
  coverage: {
    type: Number,
    // required: true,
  },
  color: {
    type: String,
    // required: true,
  }


}, { timestamps: true });

const productInfo = mongoose.model('productInfo', productSchema);

module.exports = productInfo;

