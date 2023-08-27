const expenseModel = require('../models/expenseModel');

exports.addExpense= async (req, res) => {
  const { title, amount, type, category, description, date } = req.body;
  console.log(req.body)

  try {
    // validations
    if (!title || !category || !date) {
      return res.status(400).json({ message: 'Invalid data' });
    }
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // Create a new instance of the Income model with the data
    const income = new expenseModel({
      title,
      amount,
      type,
      category,
      description,
      date,
    });

    // Save the new income document to the database
    await income.save();

    res.status(200).json({ message: 'Expense added' });
  } catch (error) {
    // Handle any errors that might occur during the process
    console.error('Error adding income', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getExpenses = async (req,res) =>{
  try{
    const incomes =await expenseModel.find().sort({createdAt:-1})
    res.status(200).json(incomes)
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