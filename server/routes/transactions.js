const router=require('express').Router()

const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const {addIncome, getIncome, deleteIncome}=require('../controllers/income')
const {loginUser,registerUser}=require('../controllers/user')


router.post('/register',registerUser)
    .post('/login',loginUser)
    .post('/add-income',addIncome)
    .get('/get-incomes',getIncome)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expense',addExpense)
    .get('/get-expenses',getExpenses)
    .delete('/delete-expense/:id',deleteExpense)
    


module.exports=router