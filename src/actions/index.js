import {SIGN_IN, SIGN_OUT } from "./types"

export const handleSignIn=(userId)=>{
    return{
       type: SIGN_IN,
       payload: userId
    }   
}

export const handleSignOut=()=>{
    return{
       type: SIGN_OUT
    }   
}
