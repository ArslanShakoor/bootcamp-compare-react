import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions } from '../../actions/sessions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/style.scss';


class SessionsNew extends Component{
  renderField(field){
  	const {meta:{touched, error}} = field;
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
          {touched ? error : ""}
        </div>
      </div>
    );
  }

	onSubmit(values){

    this.props.fetchSessions(values,()=>{
			//add the call back fundtio
			this.props.history.push('/');
		});
	}
	render(){
    console.log(this.props.sessions);
    const {handleSubmit} = this.props;

		return(
		  <div className="form">

	      <ul className="tab-group">
	        <li className="tab active"><a href="#login">Log In</a></li>
	        <li className="tab"><Link to ="/signup">Sign Up</Link></li>
	      </ul>

		    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
		      <div id="login">
            <h1>Welcome Back!</h1>
	          <Field
	            label = "Email"
	            name = "email"
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
	          <button className="button button-block" >Log In</button>
        </form>
      </div>
		);
	}
}
function validate(values) {
	// body...
	const errors = {};
	if(!values.email){
		errors.email="Enter the Email";
	}
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email =  "Enter the valid Email"
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
  form: 'login' // a unique identifier for this form
})(
connect(mapStateToProps,{fetchSessions})(SessionsNew)
);
