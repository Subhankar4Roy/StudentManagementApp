const mongoose= require("mongoose");
var studentschema = new mongoose.Schema({

    name:{type: String},

    email:{type: String},
    
    phone:{type: String},

    dept:{type: String}


});
const studentitem = module.exports = mongoose.model('student', studentschema);