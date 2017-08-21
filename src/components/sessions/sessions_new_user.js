 import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions } from '../../actions/sessions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './css/style.css';
 
 


class SessionsNewUser extends Component{
    renderField(field){
    	return(
          <div className = "field-wrap">
          <label>
            {field.label}<span className="req">*</span>
          </label> 
            <input 
              
              {...field.input}
              type = {field.type}
              

            />
           
          </div>

        );
    }

	onSubmit(values){
	   console.log	
       this.props.fetchSessions(values)
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
			            name = "First Name"
			            component = {this.renderField}
			            type = "text"

			          />
			          <Field
			            label = "Last Name"
			            name  = "Last Name"
			            component = {this.renderField}
			            type = "text"
			           />
			        </div>    
		          <Field
		            label = "Email"
		            name  = "Email"
		            component = {this.renderField}
		            type = "text"
		           />
		          <Field
		            label = "Password"
		            name  = "Password"
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
function mapStateToProps({sessions}) {
  return { sessions };
}

export default reduxForm({
  form: 'signup' // a unique identifier for this form
})(
connect(mapStateToProps,{fetchSessions})(SessionsNewUser)
);