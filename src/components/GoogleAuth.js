import React from 'react';
import { connect } from "react-redux";
import { handleSignIn, handleSignOut } from '../actions'; 

class GoogleAuth extends React.Component {
    //we don't know if user is signied in or not

componentDidMount(){
 //loading client library and then
 //load only gives us a notification when the process is complete
    window.gapi.load('client: auth2', ()=>{
       
        //initializing it with the clientId
        //by passing in a call back function
        window.gapi.client.init({
            //init sends back a promess (give notifiction when lib succ init)
            clientId: 
                '691996070134-l9nui3din017usb1hh8benv1nigrc0j9.apps.googleusercontent.com',
            
            // what do we want to acces from the user?
            scope:'email'
            //when lib is successfuly invoqued THEN the callback fct is run
        }).then(()=>{

            //only there we know if the user is signed in and then we can print its status on the screen
            //referring to the auth object, auth lib itself, and assign to the component class

            //this.auth
            //usefull to make reference to it in any other function inside my class.
            //for example : signe them in /out, authentification status
            this.auth = window.gapi.auth2.getAuthInstance(); 

        
            //isSignedIn (propertie) get the value and change the state with it
            //is signed in propertie commes from auth coming from the reducer
            this.onAuthChange(this.auth.isSignedIn.get());

            //listen pass a callback function anytime the fct status is changed
            //therefore, on change the status is also changed
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
}

onAuthChange =(isSignedIn)=>{
    if(isSignedIn){
        console.log("I jsut signed in")
        this.props.handleSignIn(this.auth.currentUser.get().getId());
    }else{
        console.log("I jsut signed Out")
        this.props.handleSignOut()
    }
}

//arrow function because call back

handleSignIn=()=>{
    console.log("I handle signed in")
    this.auth.signIn()
}

handleSignOut=()=>{
    console.log("I handle signed Out")
   this.auth.signOut()
}

renderAuthButton(){
    if(this.props.isSignedIn === null){
        return null
    }else if(this.props.isSignedIn===true){
        console.log("I' min")
        return (
            <button className="ui blue google button" onClick={this.handleSignOut}>
                <i className="google icon"/>
                Sign-out</button>
            )
    }else{
    
        return(
            
            <button className="ui green google button"  onClick={this.handleSignIn}> 
            <i className="google icon"/>
           Sign-In with Google</button>
           )
    }
}
    render() { 
        return <div>{this.renderAuthButton()}</div> ;
    }
}

const mapStateToProps = state=>{
    //give the status of isSigned
    return{ isSignedIn: state.auth.isSignedIn} 
}

export default connect(
    mapStateToProps,
    {handleSignIn, handleSignOut}
  )(GoogleAuth)

