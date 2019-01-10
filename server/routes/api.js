const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const dbConnectionApi = require('../dbconnection/db-connnection-api');
const userController = require('../controller/user-controller');
const contactController = require('../controller/contact-controller');
const sendResponse = require('../util/send-response');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Get all contacts
router.get('/contacts',contactController.getAllContacts, sendResponse.sendMyResponse);

// Get single contact detail
router.get('/contactDetail/:id', contactController.getContactDetail, sendResponse.sendMyResponse);

//add contacts
router.post('/addContact', jsonParser, contactController.addContact, sendResponse.sendMyResponse);

//delete contacts
router.post('/deleteContacts', jsonParser, contactController.deleteContacts, sendResponse.sendMyResponse);

//update a contact
router.put('/updateContact', jsonParser, contactController.updateContact, sendResponse.sendMyResponse);

module.exports = router;