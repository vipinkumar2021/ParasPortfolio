var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.URI;


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});

var signUpSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Username: {
        type: String
    },
    MobileNumber: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

var signUpModel = mongoose.model('users', signUpSchema)

module.exports = signUpModel;