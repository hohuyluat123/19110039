const express = require('express');
const {mygroupRequest} = require('../controllers/controller.mygroupcontroller');
const router = express.Router();

// define the home page route
router.get('/', mygroupRequest);

// define the about route

module.exports = router