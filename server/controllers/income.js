const incomeModel = require('../models/incomeModel');
const userModel = require('../models/userModel');
const mongoose=require('mongoose');


// exports.addIncome = async (req, res) => {
//   const { title, amount, type, category, description, date } = req.body;
//   console.log(req.body)

//   try {
//     // validations
//     if (!title || !category || !date) {
//       return res.status(400).json({ message: 'Invalid data' });
//     }
//     if (isNaN(amount) || amount <= 0) {
//       return res.status(400).json({ message: 'Invalid amount' });
//     }

//     // Create a new instance of the Income model with the data
//     const income = new incomeModel({
//       title,
//       amount,
//       type,
//       category,
//       description,
//       date,
//     });

//     // Save the new income document to the database
//     await income.save();

//     res.status(200).json({ message: 'Income added' });
//   } catch (error) {
//     // Handle any errors that might occur during the process
//     console.error('Error adding income', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

exports.getIncome = async (req,res) =>{
  try{
    const incomes =await incomeModel.find().sort({createdAt:-1})
    res.status(200).json(incomes)
  }
  catch(error){
    res.status(500).json({message:"Error"})
  }
}


exports.deleteIncome = async(req,res) =>{
  const {id}=req.params;
  incomeModel.findByIdAndDelete(id)
      .then((income)=>{
        res.status(200  ).json({ message: 'Income deleted' });
      })
      .catch((err)=>{
        res.status(500).json({ message: 'Deletelttin error' });
      })

}



// Add income using user id
exports.addIncome = async (req, res) => {
  
  const { email,title, amount, type, category, description, date } = req.body;
  console.log(req.body)
  try {
    const user = await userModel.findOne({ email });
    if (user) {
            // validations
    if (!title || !category || !date) {
      return res.status(400).json({ message: 'Invalid data' });
    }
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // Create a new instance of the Income model with the data
    const income = await new incomeModel({
      title,
      amount,
      type,
      category,
      description,
      date,
      user:user._id,

    });
    // Save the new income document to the database
    user.income.push(income._id);
    await income.save();
    await user.save();

    res.status(200).json({ message: 'Income added Success with User' });
    }
    else{
      return res.status(500).json({message:"User not found"});
    }


  } catch (error) {
    // Handle any errors that might occur during the process
    console.error('Error adding income', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};