const mongoose=require('mongoose');
const { model } = require('mongoose');

const IncomeSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        maxLength:50
    },
    type:{
        type:String,
        default:"income",
        
    },
    date:{
        type:Date,
        required:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
        
    },
    description:{
        type:String,
        required:false,

    },
        

},{timestamps:true})

module.exports=mongoose.model.Incomes || mongoose.model('Income',IncomeSchema);