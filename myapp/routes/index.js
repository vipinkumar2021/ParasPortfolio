var express = require('express');
var router = express.Router();

var contactUsModel = require('../models/contactusschema');
var signUpModel = require('../models/signupschema');
var addProductModel = require('../models/addproductschema');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', msg: '' });
});

router.post('/contactus', function(req, res, next) {
  
  var contactUsDetail = new contactUsModel({
    Name: req.body.name,
    Mobile: req.body.mobilenumber,
    Email: req.body.email,
    WriteMessage: req.body.writemessage
  });
  
  contactUsDetail.save((err) => {
    if (err) throw err;

    res.render('index', { title: 'Express', msg: 'Query Submitted Successfully!' });
  })

 // res.render('index', { title: 'Express' });
});


//Middleware
function checkExistingUsername(req, res, next) {
  var getSignUpDetailByUsername = signUpModel.findOne({Username: req.body.username});
  getSignUpDetailByUsername.exec((err, signupData) => {
    if(err) throw err;
    if(signupData != null) {
      res.render('index', { title: 'Express', msg: 'Username Already Exists! Please try different Username!'})

    } else {
      next();
    }
      })
}

function checkExistingMobileNumber(req, res, next) {
  var getSignUpDetailByMobileNumber = signUpModel.findOne({MobileNumber: req.body.mobilenumber});
  getSignUpDetailByMobileNumber.exec((err, signupData) => {
    if(err) throw err;
    if(signupData != null) {
      res.render('index', { title: 'Express', msg:'Mobile Number already exists! Please try different Mobile Number!'})
    } else {
      next();
    }
  });
}

function checkExistingEmail(req, res, next) {
  var getSignUpDetailByEmail = signUpModel.findOne({Email: req.body.email});
  getSignUpDetailByEmail.exec((err, signupData) => {
    if(err) throw err;
    if(signupData != null) {
      res.render('index', {title: 'Paras Portfolio', msg:'Email id Already Exists! Please Try different Email Id to Sign up!'})
    } else {
      next();
    }
  });
}
//Sign up coding...

router.post('/signup', checkExistingUsername, checkExistingMobileNumber, checkExistingEmail, function(req, res, next) {

  var password = req.body.password;
  var confirmPassword = req.body.confirmpassword;

  
 
  if(password != confirmPassword) {
    res.render('index', { title: 'Express', msg: 'Sorry! Passwords Not Matched, Try Again' });

  } else {
    var signUpDetail = new signUpModel({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      Username: req.body.username,
      MobileNumber: req.body.mobilenumber,
      Email: req.body.email,
      Password: req.body.password
  
    });
  
    signUpDetail.save((err)=> {
      if(err) {
        res.render('index', { title: 'Express', msg: 'Some Error Occured, Please Try again later' });
  
      }
      res.render('index', { title: 'Express', msg: 'Signed up Successfully! You may Sign in Now...' });
    });
  }
  
  

  //res.render('index', { title: 'Express', msg: '' });
});

// Add Product
router.post('/addproduct', (req, res, next) => {

  var productDetails = new addProductModel({
    ProductCategory: req.body.productcategory,
    ProductName: req.body.productname,
    ProductPrice: req.body.productprice,
    ProductYear: req.body.productyear
  });

    productDetails.save((err) => {
      if(err) {
        res.render('index', {title: ' Espress', msg: 'Error occured while adding product'});
      }
      res.render('index', {title: ' Espress', msg: 'Product Added Successfully'});

    });
})

module.exports = router;
