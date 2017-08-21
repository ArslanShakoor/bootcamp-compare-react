import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions } from '../../actions/sessions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/style.css';
 
 


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
function mapStateToProps({sessions}) {
  return { sessions };
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(
connect(mapStateToProps,{fetchSessions})(SessionsNew)
);