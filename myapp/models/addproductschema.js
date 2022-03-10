var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.URI;


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});

var addProductSchema = new mongoose.Schema({
    ProductCategory: {
        type: String
    },
    ProductName: {
        type: String
    },
    ProductPrice: {
        type: String
    },
    ProductYear: {
        type: String
    },
    
    Date: {
        type: Date,
        default: Date.now
    }
});

var addProductModel = mongoose.model('Products', addProductSchema)

module.exports = addProductModel;