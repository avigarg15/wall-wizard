const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  firstName: {
    type: String,
    // required: true
  },
  secondName: {
    type: String,
    // required: true
  },
  phone: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  }
}, { timestamps: true });

const feedbackInfo = mongoose.model('feedbackInfo', feedbackSchema);
module.exports = feedbackInfo;