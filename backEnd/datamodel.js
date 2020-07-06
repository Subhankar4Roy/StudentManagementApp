const mongoose= require("mongoose");
var studentschema = new mongoose.Schema({

        studentImage:{type:String,
                required:false},
        name:{type:String,
                required:false},
        email:{type:String,
                required:false},
        phone:{type:Number,
                required:false},
        passingYear:{type:Number,
                required:false},
        discipline:{type:String,
                required:false},
        department: {type:String,
                required:false},
        universityRollNo: {type:Number,
                required:false},
        year:{type:String},
        imgUrl:{type:String,
                default:'https://www.w3schools.com/w3images/avatar2.png'}


});
const studentitem = module.exports = mongoose.model('student', studentschema);