const express = require('express');
const {messageRequest} = require('../controllers/controller.messagecontroller');
const {messageIDRequest} = require('../controllers/controller.messageIDcontroller');
const router = express.Router();

router.get('/', messageRequest);
router.get('/:myID', messageIDRequest);



module.exports = router
