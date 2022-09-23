const {mygroup} = require('../models/models.mygroup');

function postmssvRequest(req,res){
    let ID= Number(req.params.myID);
    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    if(check(ID)==1){
        const item = {id:ID,name: req.body.name};
        res.status(200).json(item);
        mygroup.push(item);
    }else{
        if(check(ID)==0){
            return res.status(400).json({
                error:'not valid'
            });
        }else{
            return res.status(400).json({
                error:'ID is not member in mygroup'
            });
        }
    }
    

}

function check(id){
    let temp=1;
    mygroup.forEach(item =>{
        if(item.id==id){
            temp=0;
        }
    })
    if(temp==1){
        if(Number(id)==19110039 || Number(id)==19110492 ||Number(id)==19110340){
            return 1;
        }else{
            return 2;
        }
    }else{
        return 0;
    }
}

module.exports = {
    postmssvRequest
}