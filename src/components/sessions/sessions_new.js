import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions } from '../../actions/sessions';
import { connect } from 'react-redux';
import './css/style.css';
const script = document.createElement("script");
script.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
script.async = true;

const script1 = document.createElement("script");
script1.src = "js/index.js";
script1.async = true;


class SessionsNew extends Component{
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
		        <li className="tab"><a href="#signup">Sign Up</a></li>
		        <li className="tab active"><a href="#login">Log In</a></li>
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
		           <button type="submit" className="btn btn-primary">Submit</button> 
	           </form>
           </div>

		);
	}
}
function mapStateToProps({sessions}) {
  return { sessions };
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(
connect(mapStateToProps,{fetchSessions})(SessionsNew)
);