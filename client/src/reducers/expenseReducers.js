import {
    EXPENSE_LIST_REQUEST,
    EXPENSE_LIST_SUCCESS,
    EXPENSE_LIST_FAIL,

    ADD_EXPENSE_LIST_REQUEST,
    ADD_EXPENSE_LIST_SUCCESS,
    ADD_EXPENSE_LIST_FAIL,
    EXPENSE_DELETE_REQUEST,
    EXPENSE_DELETE_SUCCESS,
    EXPENSE_DELETE_FAIL

} from '../constansts/expenseConstansts'


export const expenseListReducer = (state={expenses:[]},action)=>{
    
    switch(action.type){
        case EXPENSE_LIST_REQUEST:
            return {loading:true,expenses:[]}
        
        case EXPENSE_LIST_SUCCESS:
            return {loading:false,expenses:action.payload}
        
        case EXPENSE_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}

export const addExpenseReducer = (state={},action)=>{
    
    switch(action.type){
        case ADD_EXPENSE_LIST_REQUEST:
            return {loading:true}
        
        case ADD_EXPENSE_LIST_SUCCESS:
            return {loading:false,expense:action.payload}
        
        case ADD_EXPENSE_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}

export const expenseDeleteReducer = (state={},action)=>{
    
    switch(action.type){
        case EXPENSE_DELETE_REQUEST:
            return {loading:true}
        
        case EXPENSE_DELETE_SUCCESS:
            return {loading:false,success:true}
        
        case EXPENSE_DELETE_FAIL:
            return {loading:false,error:action.payload}
    
        default:
            return state
            
        
    }
}
