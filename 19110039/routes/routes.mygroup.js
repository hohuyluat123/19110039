const express = require('express');
const {mygroupRequest} = require('../controllers/controller.mygroupcontroller');
const router = express.Router();


router.get('/', mygroupRequest);


module.exports = router
