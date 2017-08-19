import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import { fetchSessions } from '../../actions/sessions';
import { connect } from 'react-redux';
class SessionsNew extends Component{

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
		    	 
		  <div>	
			  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>	
		          <Field
		            label = "Email"
		            name = "email"
		            component = "input"
		            type = "text"

		          />
		          <Field
		            label = "Password"
		            name  = "password"
		            component = "input"
		            type = "password"
		           />
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