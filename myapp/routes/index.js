var express = require('express');
var router = express.Router();

var contactUsModel = require('../models/contactusschema');
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



module.exports = router;
