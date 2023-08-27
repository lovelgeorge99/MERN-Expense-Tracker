import {
    INCOME_LIST_REQUEST,
    INCOME_LIST_SUCCESS,
    INCOME_LIST_FAIL,

    ADD_INCOME_LIST_REQUEST,
    ADD_INCOME_LIST_SUCCESS,
    ADD_INCOME_LIST_FAIL,
    INCOME_DELETE_REQUEST,
    INCOME_DELETE_SUCCESS,
    INCOME_DELETE_FAIL

} from '../constansts/incomeConstants'


export const incomeListReducer = (state={incomes:[]},action)=>{
    
    switch(action.type){
        case INCOME_LIST_REQUEST:
            return {loading:true,incomes:[]}
        
        case INCOME_LIST_SUCCESS:
            return {loading:false,incomes:action.payload}
        
        case INCOME_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}

export const addIncomeReducer = (state={},action)=>{
    
    switch(action.type){
        case ADD_INCOME_LIST_REQUEST:
            return {loading:true}
        
        case ADD_INCOME_LIST_SUCCESS:
            return {loading:false,income:action.payload}
        
        case ADD_INCOME_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}

export const incomeDeleteReducer = (state={},action)=>{
    
    switch(action.type){
        case INCOME_DELETE_REQUEST:
            return {loading:true}
        
        case INCOME_DELETE_SUCCESS:
            return {loading:false,success:true}
        
        case INCOME_DELETE_FAIL:
            return {loading:false,error:action.payload}
    
        default:
            return state
            
        
    }
}
