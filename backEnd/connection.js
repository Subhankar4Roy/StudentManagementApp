const mongoose = require("mongoose");
require("./datamodel");
mongoose.connect('mongodb://localhost:27017/studentdb',{useFindAndModify:false, useUnifiedTopology: true,useNewUrlParser:true},
 (err)=> {if(!err)
              {console.log("successfully created connection with database") }

              else
                {console.log("error in connection:"+ err)}

          }
          );