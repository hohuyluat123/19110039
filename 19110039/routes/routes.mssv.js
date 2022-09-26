const express = require('express');
const {mssvRequest} = require('../controllers/controller.mssvcontroller');
const {postmssvRequest} = require('../controllers/controller.postmssvcontroller');
const router = express.Router();


router.get('/:mygroupID', mssvRequest);
router.post('/:myID', postmssvRequest);


module.exports = router
