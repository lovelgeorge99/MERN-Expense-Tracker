import{
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    USER_LOGOUT
} from '../constansts/userConstants'

export const userLoginReducer = (state={},action)=>{
    
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload}
        
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
            
        
    }
}

export const userRegisterReducer = (state={},action)=>{
    
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading:true}
        
        case REGISTER_USER_SUCCESS:
            return {loading:false,userInfo:action.payload}
        
        case REGISTER_USER_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}

