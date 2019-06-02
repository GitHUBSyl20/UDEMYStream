/* import React from 'react';
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
    //we don't know if user is signied in or not
state ={ isSignedIn: null}

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

            //update component state
            //isSignedIn (propertie) get the value and change the state with it
            this.setState({isSignedIn: this.auth.isSignedIn.get()})

            //listen pass a callback function anytime the fct status is changed
            //therefore, on change the status is also changed
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
}
//arrow function beacause call back
onAuthChange =()=>{
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
}

handleSignIn=()=>{
    this.auth.signIn()
}

handleSignOut=()=>{
   this.auth.signOut()
}

renderAuthButton(){
    if(this.state.isSignedIn ===null){
        return null;
    }else if(this.state.isSignedIn){
        return <div>
            <button className="ui red google button" onClick={this.handleSignOut}>
                <i className="google icon"/>
                Sign-out</button>
            </div>
    }else{
        return<div> 
            <button className="ui green google button"  onClick={this.handleSignIn}> 
            <i className="google icon"/>
           Sign-In</button></div>
    }
}

    render() { 
        return <div>{this.renderAuthButton()}</div> ;
    }
}
 */