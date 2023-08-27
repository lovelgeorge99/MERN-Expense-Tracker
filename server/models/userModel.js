const mongoose=require('mongoose');
const { model } = require('mongoose');

const userModel= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    },
    income:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Income'}
    ],
    expense:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Expense'}
    ]
})

module.exports=mongoose.model.Users || mongoose.model('User',userModel);