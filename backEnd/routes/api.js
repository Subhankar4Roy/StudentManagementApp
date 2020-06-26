const express = require("express");
const  mongoose = require("mongoose");

const Studentmodel = mongoose.model("student");
const studentitem = require("../datamodel");
const router = express.Router();





    

router.get('/', (req,res,next)=>{
  Studentmodel.find((err, docs)=>
   { res.json(docs)}
      ) .lean(); }
      );

router.post('/', (req,res)=>{
  let studata = req.body;
  let student = new studentitem(studata);
   student.save((err, docs)=>
    {
      if(!err) {res.status(200).send(docs);}
      else {console.log("Error occured");}
    })
  }
  );

router.delete('/:id', (req, res, next)=>{
  
  Studentmodel.deleteOne({_id:req.params.id}, (err, docs)=>
     
       {
         if(!err) {res.send("student deleted");  }

         else{res.json(err);}
       }
    );
  });

module.exports = router;