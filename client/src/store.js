import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { incomeListReducer,addIncomeReducer,incomeDeleteReducer } from './reducers/incomeReducers'
import { expenseListReducer,addExpenseReducer,expenseDeleteReducer } from './reducers/expenseReducers'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducer'


const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
   
   
    incomeList:incomeListReducer,
    addIncome:addIncomeReducer,
    deleteIncome:incomeDeleteReducer,

    expenseList:expenseListReducer,
    addExpense:addExpenseReducer,
    deleteExpense:expenseDeleteReducer,


})

const getUserInfoFromStorage=localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) :null

const initialState={
    userLogin:{userInfo:getUserInfoFromStorage}
   
}
const middleware = [thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store