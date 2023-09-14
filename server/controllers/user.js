const incomeModel = require('../models/incomeModel');
const expenseModel = require('../models/expenseModel');
const userModel = require('../models/userModel');

const crypto = require("crypto")


async function hash(password) {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    })
}
async function verify(password, hash) {
    return new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":")
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key == derivedKey.toString('hex'))
        });
    })
}

exports.loginUser = async (req,res)=>{
    const { email, password } = req.body;

    const user =await userModel.findOne({email})

    if(user && (await verify(password,user.password))){
        res.status(200).json(user);
    }
    else{
        res.status(500).json({ message:"No user found" });
    }
   
}

exports.registerUser = async (req,res)=>{
    try {
        const { name, email, password } = req.body;

        const userExists = await userModel.findOne({ email });

        if (userExists) return res.status(500).json({message:"user already exists"});

        const hashedPassword=await hash(password)

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });

        if(newUser){
            res.status(201).json({
                name:newUser.name,
                email:newUser.email
            })
        }
        else{
            res.status(400).json({ message: "User not created" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}
