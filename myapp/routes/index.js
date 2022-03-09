var express = require('express');
var router = express.Router();

var contactUsModel = require('../models/contactusschema');
var signUpModel = require('../models/signupschema');
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

//Sign up coding...

router.post('/signup', function(req, res, next) {

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

module.exports = router;
