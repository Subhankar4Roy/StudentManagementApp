const mongoose= require("mongoose");
var studentschema = new mongoose.Schema({

    name:{type:String,
            required:true},
    email:{type:String,
            required:true},
    phone:{type:Number,
            required:true},
    passingYear:{type:Number,
            required:true},
    discipline:{type:String,
                required:true,
            default:'BTech'},
    department: {type:String,
                required:true},
    universityRollNo: {type:Number,
                required:false},
    imgUrl:{type:String,
            default:'https://www.w3schools.com/w3images/avatar2.png'}


});
const studentitem = module.exports = mongoose.model('student', studentschema);