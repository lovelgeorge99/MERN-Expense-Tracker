const expenseModel = require('../models/expenseModel');
const userModel = require('../models/userModel');

exports.addExpense= async (req, res) => {
  const { title, amount, type, category, description, date } = req.body;

  try {
    const id=req.user.id;
    // console.log("id"+id)
    
    const user = await userModel.findOne({ _id:id });
    // console.log(user)
    if(user){
      if (!title || !category || !date) {
        return res.status(400).json({ message: 'Invalid data' });
      }
      if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ message: 'Invalid amount' });
      }
  
      // Create a new instance of the Income model with the data
      const expense =await  new expenseModel({
        title,
        amount,
        type,
        category,
        description,
        date,
        user:user._id,
      });
  
      // Save the new income document to the database
      user.expense.push(expense._id);
      await expense.save();
      await user.save();
  
      res.status(200).json({ message: 'Expense added' });
    }
    else{
      return res.status(500).json({message:"User not found"});
    }
  } catch (error) {
    // Handle any errors that might occur during the process
    console.error('Error adding expense', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getExpenses = async (req,res) =>{
  try{
    console.log(req.user.id)
    const expenses = await expenseModel.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(expenses)

  }
  catch(error){
    res.status(500).json({message:"Error"})
  }
}


exports.deleteExpense = async(req,res) =>{
  const {id}=req.params;
  expenseModel.findByIdAndDelete(id)
      .then((income)=>{
        res.status(200  ).json({ message: 'Expense deleted' });
      })
      .catch((err)=>{
        res.status(500).json({ message: 'Deletelttin error' });
      })

}