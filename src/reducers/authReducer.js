/* import { SIGN_IN, SIGN_OUT } from '../actions/types' */
//string assigend ti varialbes
const INITIAL_STATE = {
    isSignedIn: null, 
    userId: null
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SIGN_IN':
            //create a new state (a copy) and change one of the props
            //every time we want to change a property
            return {...state, isSignedIn: true, userId: action.payload };
        case 'SIGN_OUT': 
            return {...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}

