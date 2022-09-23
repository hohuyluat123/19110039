const express = require('express');
const {mssvRequest} = require('../controllers/controller.mssvcontroller');
const {postmssvRequest} = require('../controllers/controller.postmssvcontroller');
const router = express.Router();

// define the home page route
router.get('/:mygroupID', mssvRequest);
router.post('/:myID', postmssvRequest);
// define the about route

module.exports = router