var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.URI;


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});

var contactUsSchema = new mongoose.Schema({
    Name: {
        type: String,

    },
    Mobile: {
        type: String
    },
    Email: {
        type: String
    },
    WriteMessage: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

var contactUsModel = mongoose.model('customersmessages', contactUsSchema)

module.exports = contactUsModel;