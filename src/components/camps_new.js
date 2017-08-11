import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { createCamps } from '../actions';
import { connect } from 'react-redux';

class CampsNew extends Component{
	renderField(field){
		const {meta:{touched, error}} = field;
		return(
          <div className="form-group">
            <label>{field.label}</label>
            <input
              className="form-control"
              {...field.input}

            />  
            <div className="text-help">

            {touched ? error : ""}
           </div> 
          </div>

		);

	}
	onSubmit(values){
		console.log(values);
		this.props.createCamps(values);

	}

	render(){
		const {handleSubmit} = this.props
		return(
             
             
        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>

          <Field
            label = "Name"
            name = "name"
            component = {this.renderField}
            
          />
          <Field
            label = "Fees"
            name  = "fees"
            component = {this.renderField}
           /> 
            <Field
            label = "Course"
            name  = "course"
            component = {this.renderField}
           />
            <Field
            label = "Website"
            name  = "website"
            component = {this.renderField}
           />
           <button type="submit" className="btn btn-primary">Submit</button>
        </form>
             
		);
	}

	 
} 

function validate(values) {
	// body...
	const errors = {};
	if(!values.name){
		errors.name="Enter the name";
	}
	
	if(!values.fees){
		errors.fees="Enter the fees";
	}

	if(!values.course){
		errors.course= "enter the course"
	}

	if(!values.website){
		errors.website = "enter the website"
	}

	return errors;	
}
export default reduxForm({
	validate,
	form: 'PostNewCamp'
})(
connect(null,{createCamps})(CampsNew)
);
