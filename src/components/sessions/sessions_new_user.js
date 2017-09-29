 import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions, createUsers } from '../../actions/sessions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './css/style.css';

class SessionsNewUser extends Component{
  renderField(field){
  	const {meta:{touched,error}}= field;
  	return(
      <div className = "field-wrap">
        <label>
          {field.label}<span className="req"/>
        </label>
        <input
          {...field.input}
          type = {field.type}
        />
        <div className="text-help">
        {touched ? error : "" }
        </div>
      </div>
    );
  }

	onSubmit(values){
    this.props.createUsers(values)
	}
	render(){
    const {handleSubmit, sessions} = this.props;
    if(sessions){
      console.log("we have session");
     	console.log(sessions);
    }
		return(
		   <div className="form">

	      <ul className="tab-group">
	        <li className="tab"><Link to="/login">Log In</Link></li>
	        <li className="tab active"><a href="#signup">Sign Up</a></li>
	      </ul>

		    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
		      <div id="signup">
            <h1>Sign Up for Free</h1>
            <div className = "top-row">
  	          <Field
  	            label = "First Name"
  	            name = "first_name"
  	            component = {this.renderField}
  	            type = "text"
  	          />
  	          <Field
  	            label = "Last Name"
  	            name  = "last_name"
  	            component = {this.renderField}
  	            type = "text"
  	          />
		        </div>
	          <Field
	            label = "Email"
	            name  = "email"
	            component = {this.renderField}
	            type = "text"
	           />
	          <Field
	            label = "Password"
	            name  = "password"
	            component = {this.renderField}
	            type = "password"
	          />
          </div>
	          <button type="submit" className="button button-block">Get Started</button>
        </form>
     </div>
    );
	}
}
function validate(values) {
	// body...
	const errors = {};
	if(!values.first_name){
		errors.first_name="Enter the First Name";
	}
  else if(values.first_name.length < 3 || values.first_name.length > 12 ){
    errors.first_name= "First Name should between 3 to 12 character"
  }

	if(!values.last_name){
		errors.last_name="Enter the Last Name";
	}
  else if(values.last_name.length < 3 || values.last_name.length > 12 ){
    errors.last_name= "Last Name should between 3 to 12 character"
  }

  if(!values.email){
		errors.email="Enter the Email";
	}
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email =  "Enter the valid Email"
  }
  else if(values.email.length < 10 || values.email.length > 100 ){
    errors.email= "Email should between 10 to 100 character"
  }


	if(!values.password){
		errors.password="Enter the Password";
	}
  else if(values.password.length < 5 || values.password.length > 50 ){
    errors.password= "Password should between 5 to 50 character"
  }
	return errors;
}
function mapStateToProps({sessions}) {
  return { sessions };
}

export default reduxForm({
  validate,
  form: 'signup' // a unique identifier for this form
})(
connect(mapStateToProps,{createUsers})(SessionsNewUser)
);
