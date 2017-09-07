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
          {field.label}<span className="req"/>*
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
	  console.log	
    this.props.createUsers(values)
	}
	render(){
    const {handleSubmit, sessions} = this.props;
    if(sessions){
     	console.log(sessions)
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
	
	if(!values.last_name){
		errors.last_name="Enter the Last Name";
	}
    
    if(!values.email){
		errors.email="Enter the Email";
	}

	if(!values.password){
		errors.password="Enter the Password";
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