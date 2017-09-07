import ReactStars from 'react-stars'
import React, {Component} from 'react';
import { Field, reduxForm, initialize} from 'redux-form'; 
import { connect } from 'react-redux';


class RatingsNew extends Component{
	 
  
  renderField(field){
    
    const {meta:{touched, error}} = field;
    if (field.type =="text"){
     return(
      <div className = "form-group">
        <label>{field.label}</label>

        <input
          className = "form-control"
          {...field.input}
        />
         
        <div className = "text-help">
          {touched ? error : "" }
        </div>  
      </div>  
    );
    }
    else{
    return(
      <div className = "form-group">
        <label>{field.label}</label>
        <input
          className = "form-control"
          {...field.input}
          type = {field.type}
        />

         <ReactStars
          count={5}
          size={24}
          color2={'#ffd700'} />
           

        <div className = "text-help">
          {touched ? error : "" }
        </div>  
      </div>  
    );
    }
  }



  onSubmit(values){
    console.log(values)
  }
  render(){
     
     const  {handleSubmit } = this.props
		return(
 
      <form  onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
        <div className= "row">
        <div className= "col-md-4">
        <Field 
          label = "Student Name"
          name = "student_name" 
          type = "text"
          component = {this.renderField}
        />
        </div>
        <div className= "col-md-4">
        <Field
          label = "Email"
          name =  "student_email"
          type = "text"
          component = {this.renderField}
        />
        </div>
        <div className= "col-md-4">
        <Field 
          label = "Anonymous"
          name  = "anonymous"
          type = "text"
          component = {this.renderField}
        />
        </div>
        </div>

        <Field 
          label = "Title"
          name  = "title"
          type = "text"
          component = {this.renderField}
        />
        <Field 
          label = "Description"
          name  = "description"
          type = "text"
          component = {this.renderField}
        />
        <div className = "row">
        <div className = "col-sm-3">
        <Field 
          label = "Overall"
          name  = "overall_review"
          type = "hidden"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field 
          label = "Curriculum "
          name  = "curriculum_review"
          type = "hidden"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field 
          label = "Instructor"
          name  = "instructor_review"
          type = "hidden"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field 
          label = "Job Assistance"
          name  = "job_assistance_review"
          type = "hidden"
          component = {this.renderField}
        />
        </div>
        </div>
        <button type = "submit" className = "btn btn-primary">Submit</button>
      </form>
       
    );
	};
}
function validate(values){
  const errors = {}
  if(!values.student_name){
    errors.student_name = "Enter the Name"
  }
  if(!values.student_email){
    errors.student_email = "Enter the Email"
  }
  if(!values.title){
    errors.title = "Enter the Title"
  }
  if(!values.description){
    errors.description = "Enter the Description"
  }
  if(!values.overall_review){
    errors.overall_review = "Share Overall Review"
  }
  if(!values.curriculum_review){
    errors.curriculum_review = "Share Curriculum Review"
  }
  if(!values.curriculum_review){
    errors.instructor_review = "Share Instructor Review"
  }
  if(!values.job_assistance_review){
    errors.job_assistance_review = "Share Job Assistance Review"
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'RatingForm'
})(
connect(null,{})(RatingsNew)
);

