const express= require('express')
const route=express.Router()
const db= require('../Consultant1.js')

route.get("/list",(req,res)=>{
    console.log(db.find({},(err,list)=>{
          if(err) console.log(err)
          res.send(list)
    }))
})

route.post("/create",(req,res)=>{

    const json={
        consultant_name:'Komal & Garima',
        consultant_email: 'abc132@gmail.com',
        consultant_password: '123abc',
        consultant_city: 'Indore',
        consultant_state: 'Madhya Pradesh',
        consultant_address: 'Indore',
        consultant_phone: '0987654321',
        consultant_other_info: 'optional',
        consultant_date: 24-01-2023;
        
    }

    new db(json).save()
    res.send('created')
})

route.delete("/delete",(req,res)=>{
    const id='63ce48b3b306e67093548e4a'

    db.deleteOne({ _id : id },(err)=>{
        if(err) console.warn(err);
    });
    res.send('delete')
})


route.put("/edit",(req,res)=>{
    const id='63ce09aa3f7ef04cd819f78d'

    const json={
         consultant_name:'Komal & Garima',
        consultant_email: 'abc132@gmail.com',
        consultant_password: '123abc',
        consultant_city: 'Indore',
        consultant_state: 'Madhya Pradesh',
        consultant_address: 'Indore',
        consultant_phone: '0987654321',
        consultant_other_info: 'optional',
        consultant_date: 24-01-2023;
       
            }

    db.findOneAndUpdate({_id:id},json,{upsert: true}, function(err, doc){

        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
})


route.delete("/multidelete",(req,res)=>{
    res.send('multidelete')
})

route.get("/import",(req,res)=>{
    res.send('import')
})

route.get("/export",(req,res)=>{
    res.send('export')
})

module.exports = consultant;
