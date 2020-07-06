const express = require("express");
const  mongoose = require("mongoose");

const Studentmodel = mongoose.model("student");
const Student = require("../datamodel");
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



    

router.get('/', (req,res,next)=>{
  Studentmodel.find((err, docs)=>
   { res.json(docs)}
      ) .lean(); }
      );

router.post('/', upload.single('studentImage'), (req,res)=>{
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    studentImage: req.file.path 
  });
  student
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created student successfully",
        createdStudent: {
            name: result.name,
            email: result.email,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/students/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  // let studata = req.body;
  // let student = new studentitem(studata);
  //  student.save((err, docs)=>
  //   {
  //     if(!err) {res.status(200).send(docs);}
  //     else {console.log("Error occured");}
  //   })
  }
  );

  router.put('/:id', (req, res)=>{
    Studentmodel.findOneAndUpdate({_id:req.params.id},{
      $set:{ name:req.body.name,
             email:req.body.email,
             phone:req.body.phone,
             dept:req.body.dept,
         
           }
    }, (err, docs)=>{if(!err) {res.json(docs);} else{res.json(err);}}

    )
  }
  
  
  
  
  
  
  
  )

router.delete('/:id', (req, res, next)=>{
  
  Studentmodel.deleteOne({_id:req.params.id}, (err, docs)=>
     
       {
         if(!err) {res.send("student deleted");  }

         else{res.json(err);}
       }
    );
  });

module.exports = router;