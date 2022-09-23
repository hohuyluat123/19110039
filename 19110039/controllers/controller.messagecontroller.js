const {mygroup} = require('../models/models.mygroup');

function messageRequest (req, res) {
    res.render('messageView', {  list: mygroup });
}

module.exports = {
    messageRequest
}