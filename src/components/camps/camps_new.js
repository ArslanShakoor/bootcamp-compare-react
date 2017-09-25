import React, {Component} from 'react';
import { Field, reduxForm, initialize} from 'redux-form';
import { createCamps,fetchCamp,updateCamp } from '../actions';
import { connect } from 'react-redux';

class CampsNew extends Component{

  componentDidMount(){
	  const { id } = this.props.match.params;
      if (id) {
        this.props.fetchCamp(id);
        console.log(id);
        this.handleInitialize();
    }
	}


	handleInitialize() {
	  const initData = {
      "name":this.props.camp.name,
      "fees":this.props.camp.fees,
      "course":this.props.camp.course,
      "website":this.props.camp.website,
    };

    this.props.initialize(initData);
  }

	renderField(field){
		const {meta:{touched, error}} = field;
		return(
      <div className = "field-wrap">
        <label>
          {field.label}<span className={field.req}></span>
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
		console.log(values);
		const { id } = this.props.match.params;
		if(id){
		  this.props.updateCamp(id, values)
		}
	  else{
      this.props.createCamps(values);
	  }
  }

	render(){
		const {handleSubmit} = this.props
		return(
      <div className="form">
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label = "Name"
          name = "name"
          req = "req"
          component = {this.renderField}
        />
        <Field
          label = "Fees"
          name  = "fees"
          req = "req"
          component = {this.renderField}
        />
        <Field
          label = "Course"
          name  = "course"
          req = "req"
          component = {this.renderField}
        />
        <Field
          label = "Website"
          name  = "website"
          req = "req"
          component = {this.renderField}
        />
        <Field
          label = "Employement Rate"
          name  = "employment_rate"
          component = {this.renderField}
        />
        <Field
          label = "Graduation Rate"
          name  = "graduation_rate"
          component = {this.renderField}
        />
        <Field
          label = "Facebook"
          name  = "facebook"
          component = {this.renderField}
        />
        <Field
          label = "Twitter"
          name  = "twitter"
          component = {this.renderField}
        />
         <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
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
		errors.course= "enter the course";
	}

	if(!values.website){
		errors.website = "enter the website";
	}

	return errors;
}

function mapStateToProps({ camps}, ownProps){
	return { camp: camps[ownProps.match.params.id]}
}

export default reduxForm({
	validate,
	form: 'PostNewCamp'

})(
connect(mapStateToProps,{createCamps,fetchCamp,updateCamp})(CampsNew)
);
