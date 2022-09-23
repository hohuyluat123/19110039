const {mygroup} = require('../models/models.mygroup');

function messageIDRequest (req, res) {
    const ID= req.params.myID;
   // console.log(ID);
    // let member;
    // for(let i of mygroup){
    //     if(i.id==(Number(ID))){
    //         member=i;
    //     }else{
    //         res.status(400).json({error:'Not valid'});
    //     }
    // }
    let temp=0;
    mygroup.forEach(item =>{
        if(item.id==ID){
            temp=1;
            res.render('mesView', {  Name: item.name, Id: item.id });
            
        }
    })
    if(temp==0)
    {
        res.status(400).json({error:'Not valid'});
    }
}

module.exports = {
    messageIDRequest
}