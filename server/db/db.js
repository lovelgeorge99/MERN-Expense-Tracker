
const mongoose=require('mongoose')

const db=async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(`mongodb://localhost:27017/expenseTracker`);
        console.log("DB Connected")
    }
    catch(err){
        console.log(err.message)
    }

}

module.exports={db}