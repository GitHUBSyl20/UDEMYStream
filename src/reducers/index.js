import { combineReducers } from 'redux';
import authReducer from './authReducer'
//using alias to avoid confusion
import { reducer as formReducer } from 'redux-form' 

export default combineReducers ({
    //namereducer: is coming from
   auth: authReducer,
   form: formReducer
})


