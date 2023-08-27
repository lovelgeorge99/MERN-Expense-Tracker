const incomeModel = require('../models/incomeModel');
const expenseModel = require('../models/expenseModel');
const userModel = require('../models/userModel');

exports.loginUser = async (req,res)=>{
    const { email, password } = req.body;
    const user =await userModel.findOne({
        email,password
    })
    if(user){
        res.status(200).json(user);
    }
    else{
        res.status(500).json({ message:"No user found" });
    }
    console.log("in")
}
exports.registerUser = async (req,res)=>{
    try {
        const { name, email, password } = req.body;

        const userExists = await userModel.findOne({ email });

        if (userExists) return res.status(500).json(userExists);

        const newUser = await userModel.create({
            name,
            email,
            password,
        });

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}
