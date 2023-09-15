const router=require('express').Router()

const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const {addIncome, getIncome, deleteIncome}=require('../controllers/income')
const {loginUser,registerUser}=require('../controllers/user')
const {protect}= require('../middleware/authMiddleware')

router.post('/register',registerUser)
    .post('/login',loginUser)
    .post('/add-income',protect,addIncome)
    .get('/get-incomes',protect,getIncome)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expense',protect,addExpense)
    .get('/get-expenses',protect,getExpenses)
    .delete('/delete-expense/:id',deleteExpense)
    


module.exports=router