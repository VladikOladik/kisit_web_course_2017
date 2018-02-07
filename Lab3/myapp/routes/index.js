var express = require('express');
var router = express.Router();
var forms = require('./../forms');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { 
		title: 'My forms',
		availableForms :forms.getAvailableForms()
	});
});

router.get('/admin', function(req, res){
	res.render('admin', {
		title: 'Completed forms',
		submittedForms: forms.getSubmittedForms()
	})
})

router.get('/fillForm', function(req, res){
	res.render('fillform', {
		form : forms.getForm(req.param('formID'))
	});
});

router.post('/sendForm', urlencodedParser, function(req, res){
	forms.submitForm(req);
	res.send('ok <a href="/">home</a>')
});

router.get('/admin/getSubmittedForm', function(req, res){
	res.render('getSubmittedForm', {
		form : forms.getSubmittedForm(req.param('formID'))
	})
})

module.exports = router;