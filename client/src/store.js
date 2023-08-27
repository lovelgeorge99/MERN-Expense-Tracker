import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { incomeListReducer,addIncomeReducer,incomeDeleteReducer } from './reducers/incomeReducers'
import { expenseListReducer,addExpenseReducer,expenseDeleteReducer } from './reducers/expenseReducers'


const reducer=combineReducers({
    incomeList:incomeListReducer,
    addIncome:addIncomeReducer,
    deleteIncome:incomeDeleteReducer,

    expenseList:expenseListReducer,
    addExpense:addExpenseReducer,
    deleteExpense:expenseDeleteReducer,
})

const initialState={
    'lovel':'george'
    
   
}
const middleware = [thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store