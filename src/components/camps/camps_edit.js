import React, {Component} from 'react';
import { Field, reduxForm, formValues, initialize} from 'redux-form';
import { updateCamps,fetchCamp } from '../../actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class CampsEdit extends Component{

	componentDidMount(){
		const { id } = this.props.params.id;
		console.log(id);
		this.handleInitialize();
	}


	handleInitialize() {
    const initData = {
      "name":this.props.camp.name,
      "fees":this.props.camp.fees,
      "course":this.props.camp.course,
      "website":this.props.camp.website
    };

    this.props.initialize(initData);
  }

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
	  this.props.updateCamps(values);
	}

	render(){
	  const {handleSubmit, camp} = this.props;
	  console.log(camp.name)

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

function mapStateToProps({ camps}, ownProps){
	return { camp: camps[ownProps.match.params.id]}
}
export default reduxForm({
	validate,
	form: 'PostNewCamp',
	enableReinitialize: true,
})(
connect(mapStateToProps,{updateCamps,fetchCamp})(CampsEdit)
);
