const {mygroup} = require('../models/models.mygroup');

function mssvRequest (req, res) {
    let id = req.params.mygroupID;
    var item;
    for(var i of mygroup){
        if( Number(i.id)==Number(id)){
            item=i;
            break;
        }
    }
    if (item) {
        res.status(200).json(item);
    }
    else {
        res.status(400).json({error:'Not valid'});
    }
}



module.exports = {
    mssvRequest
}