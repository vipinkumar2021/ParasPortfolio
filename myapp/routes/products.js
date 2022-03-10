var express = require('express');
var router = express.Router();

var addProductModel = require('../models/addproductschema');
/* GET home page. */
router.get('/', function(req, res, next) {


    var getProductsData = addProductModel.find({});
    getProductsData.exec((err, productData) => {
        if(err) {
            res.render('products', { title: 'Express', msg: '', productData: '' });
        }
        if(productData != null) {
            res.render('products', { title: 'Express', msg: '', productData: productData });
        } else {
            res.render('products', { title: 'Express', msg: 'No Data Found', productData: '' });

        }
    });




  //res.render('products', { title: 'Express', msg: '' });
});


module.exports = router;