const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const estimateSchema = new Schema({
  city: {
    type: String,
    enum: ['bangalore', 'mumbai', 'delhi', 'chennai', 'noida'],
    // required: true,
  },
  space: {
    type: String,
    enum: ['interior', 'exterior']
    // required: true,
  },
  bhk: {
    type: String,
    enum: ['1bhk', '2bhk', '3bhk', '4bhk+'],
    // required: true,
  },
  carpetArea: {
    type: Number,
    // required: true,
  }

}, { timestamps: true });

const estimateInfo = mongoose.model('estimateInfo', estimateSchema);

module.exports = estimateInfo;

