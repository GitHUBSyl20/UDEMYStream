
import React from 'react';
//component, function
import { Field, reduxForm } from 'redux-form';

/* class StreamCreate extends React.Component {
    renderInput(formProps){
        console.log(formProps)
        return <input {...formProps.input}/>

//take the relevent properties and hook them up to the input field
//equivalent to onChange={formProps.input.onChange}
    } */

//shorter syntax by desctruturing prop
class StreamCreate extends React.Component {
    //destructuring meta
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                        <div className="header">{error}</div>
                    </div>
                )
        }
    }
    //we pass renderInput to another compoenent. 
    //therfore there is a pb of context
    //When used the function will be called 
    //on an other object from the Field component
    renderInput=({ input, label, meta })=> {
        console.log(meta)

        return (
            <div className="field">
                <label >{label}</label>
                <input {...input} autoComplete="off"/>
                {/* <div>{meta.error}</div> */}
                {this.renderError(meta)}
            </div>

        )
    }

    //forms values will be inside of an object
    onSubmit(formValues) {
        console.log(formValues)
    }


    render() {
        console.log(this.props)
        //assign a compoenent to be shown on the screen
        //customize it as we want
        //"name propertie very important" IT makes conection between renderInput property and the 
        //validate with the correct error (relative to the key name created during the validation of the 
        //form)
        //fct called on an unknown baleu of this
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error">
                <Field name="title" component={this.renderInput} label="enter title" />
                <Field name="description" component={this.renderInput} label="enter decription" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = "you smell strange tod   ay"
    }
    if (!formValues.title) {
        error.description = " I love you"
    }
    return error
}

export default reduxForm({
    validate: validate,
    form: 'streamCreate'
})(StreamCreate)