const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
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
    city: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const contactInfo = mongoose.model('contactInfo', contactSchema);
module.exports = contactInfo;