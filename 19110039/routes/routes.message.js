const express = require('express');
const {messageRequest} = require('../controllers/controller.messagecontroller');
const {messageIDRequest} = require('../controllers/controller.messageIDcontroller');
const router = express.Router();

// define the home page route
router.get('/', messageRequest);
router.get('/:myID', messageIDRequest);

// define the about route

module.exports = router