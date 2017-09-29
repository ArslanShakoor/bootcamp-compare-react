import React, {Component} from 'react';
import ReactStars from 'react-stars'
import { createRatings} from '../../actions/ratings';
import { Field, reduxForm, initialize, change} from 'redux-form';
import { connect } from 'react-redux';
import "./css/rating_style.css"

class RatingsNew extends Component{

  constructor(props) {
    super(props);
    this.state = { overall_review: 1 ,
      curriculum_review: 1,
      job_assistance_review: 1,
      instructor_review: 1
    };
  }

  onChangeRating = (name, value) => {
    this.props.change(name, value);
    this.setState({name: value});
    console.log(this.state.name1);
    console.log(name);
  }

  onChangeCamp = (e) => {
    this.props.change("camp_id", e.target.value);
    this.setState({"camp_id": e.target.value});
    console.log(this.state.camp_id);
    console.log("camp_id");
  }

  onChangeTextArea = (e) => {
    this.props.change("description",e.target.value);
    this.setState({"description": e.target.value});
    console.log(this.state.textarea);
    console.log("textarea");
  }


  renderField =(field) => {
    let name = field.input.name;
    const {meta:{touched, error}} = field;
    if (field.type =="text" || field.type == "checkbox"){
      return(
        <div className =  "field-wrap">
          <label>{field.label} <span className={field.req}></span></label>
          <input
            {...field.input}
            type = {field.type}
          />
          <div className = "text-help">
          {touched ? error : "" }
          </div>
        </div>
      );
    }
     else if (field.type == "select"){
      return(
        <div className = "field-wrap">
          <label>{field.label} <span className={field.req}></span></label>
          <div>
            <select
              onChange={(value) => {
                 this.onChangeCamp(value)
              }}>
              <option />
              <option value="2">Flatiron</option>
              <option value="5">Bloc</option>
              <option value="3">Hack Reactor</option>
              <option value="4">Firehose</option>
            </select>
          </div>
          <div className = "text-help">
            {touched ? error : "" }
          </div>
        </div>
      );
    }
    else if (field.type == "textarea"){
      return(
        <div className = "field-wrap">
          <label>{field.label} <span className={field.req}></span></label>

          <textarea
            onChange = { (value) => this.onChangeTextArea(value)}
            rows="8"
            {...field.textarea}
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
          <label>{field.label} <span className={field.req}></span></label>
          <ReactStars
            count={5}
            size={20}
            onChange={(value) => {
              this.onChangeRating(name, value);
            }}
            value={this.state.name}
          />
          <div className = "text-help">
            {touched ? error : "" }
          </div>
        </div>
      );
    }
  }

  onSubmit = (values) => {
    this.props.createRatings(values, ()=>{
			//add the call back fundtio
			this.props.history.push('/');
		});
  }

  render(){

    const  {handleSubmit} = this.props
		return(
      <div className="form">
      <form  onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
        <div className = "row">
          <div className= "col-md-12">
            <Field
              type = "select"
              label = "Bootcamp"
              name = "camp_id"
              req = "req"
              component={this.renderField}>
            </Field>
          </div>
        </div>
        <div className= "row">

        <div className= "col-md-4">
        <Field
          label = "Student Name"
          name = "name"
          type = "text"
          req = "req"
          component = {this.renderField}
        />
        </div>
        <div className= "col-md-4">
        <Field
          label = "Email"
          name =  "email"
          type = "text"
          req = "req"
          component = {this.renderField}
        />
        </div>

        <div className= "col-md-2">
        <Field
          label = "Anonymous"
          name  = "anonymous"
          type = "checkbox"
          component = {this.renderField}
        />
        </div>

        </div>

        <div className="row">
        <div className= "col-md-6">
          <Field
            label = "Occupation"
            name  = "occupation"
            type = "text"
            req = "req"
            component = {this.renderField}
          />
        </div>
        <div className= "col-md-6">
          <Field
            label = "Title"
            name  = "title"
            type = "text"
            req = "req"
            component = {this.renderField}
          />
        </div>
        </div>
        <Field
          label = "Description"
          name  = "description"
          type = "textarea"
          req = "req"
          component = {this.renderField}
        />
        <div className = "row">
        <div className = "col-sm-3">
        <Field
          label = "Overall"
          name  = "overall_review"
          req = "req"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field
          label = "Curriculum"
          name  = "curriculum_review"
          req = "req"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field
          label = "Instructor"
          name  = "instructor_review"
          req = "req"
          component = {this.renderField}
        />
        </div>
        <div className = "col-sm-3">
        <Field
          label = "Job Assistance"
          name  = "job_assistance_review"
          req = "req"
          component = {this.renderField}
        />
        </div>
        </div>
        <button type = "submit"  className = "btn btn-primary">Submit</button>
      </form>
      </div>

    );
	};
}
function validate(values){
  const errors = {}
  if(!values.name){
    errors.name = "Enter the Name"
  }
  else if(values.name.length < 3 || values.name.length > 24){
    errors.name= "Name should between 3 to 24 characters"
  }

  if(!values.camp_id){
    errors.camp_id = "Select the Bootcamp"
  }

  if(!values.email){
    errors.email = "Enter the Email"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email =  "Enter the valid Email"
  }

  else if(values.email.length < 10 || values.email.length > 100){
    errors.email = "Email should between 10 to 100 characters"
  }
  if(!values.title){
    errors.title = "Enter the Title"
  }
  else if(values.title.length < 10 || values.title.length > 100){
    errors.title= "Name should between 10 to 100 characters"
  }
  if(!values.occupation){
    errors.occupation = "Enter the occupation"
  }
  else if(values.occupation.length < 7 || values.occupation.length > 30){
    errors.occupation= "Occupation should between 7 to 30 characters"
  }
  if(!values.description){
    errors.description = "Enter the Description"
  }

  else if(values.description.length < 50 || values.description.length > 1500){
    errors.description= "Description should between 50 to 1500 characters"
  }
   if(!values.overall_review){
    errors.overall_review = "Enter your Overall Rating"
  }
   if(!values.curriculum_review){
    errors.curriculum_review = "Enter the Curriculum Rating"
  }
   if(!values.instructor_review){
    errors.instructor_review = "Enter the Instructor Rating"
  }
   if(!values.job_assistance_review){
    errors.job_assistance_review = "Enter the Job Assistance Rating"
  }
  return errors
}



export default reduxForm({
  validate,
  form: 'RatingForm'
})(
connect(null,{createRatings})(RatingsNew)
);
