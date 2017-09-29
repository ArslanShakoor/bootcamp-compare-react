import React, {Component} from 'react';
import { fetchRating } from '../../actions/ratings'
import { fetchCamp, deleteCamp } from '../../actions';
import { connect} from 'react-redux';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';
import './css/style.css'

class CampsShow extends Component{

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.fetchCamp(id);
		this.props.fetchRating(id);
	}

	onDeleteClick(){
		const { id } = this.props.match.params;
		this.props.deleteCamp(id);
	}

	renderHeader(){
  const {camp} = this.props;
    return(
      <header className="review">
        <div className="overlay">
          <div className="container">
            <h1 className="display-1 text-white">{camp.name}</h1>
						<div className ="content">
							<div className="stars">
								<ReactStars
								  count={5}
								  size={30}
								  value={camp.overall}
								  edit = {false}
						    />
							</div>
						  <h3 className="rating-value text-white">{`\u00A0\u00A0  ${(Math.round(camp.overall * 100) / 100).toFixed(1)} Ratings`}</h3>
					  </div>
					</div>
        </div>
      </header>

    );
  }
	getValue(val){
		if (val != null){
			return val
		}
		else{
			return "N/A"
    }
	}
	getWebsite(val){
		if (val != null){
			val = `http://${val}`;
			return(
				<a href= {val} target="_blank">
				  <img src = "/src/images/web.png" width = "30" height = "25px" />
			  </a>
		  );
		}
		else{
			return "N/A"
    }
	}
	getRating(val){
		return(
			<ReactStars
				count={5}
				size={15}
				value={val}
				edit = {false}
			/>
	  );
	}
  getFormatDate(val){
    let cts = val;
    let date
    return(
      date  = (new Date(cts).toLocaleDateString("en-US"))
    );
  }
	renderCampDetails(){
  const {camp} = this.props;
	  return(
			//course fees website facebook twitter graduationrate employment rate average salary
			// overall_review curriculum review job_assistance instructor_review
		  <div className = "camp-sidebar">
			<div className = "camp-info">
			  <div className = "container-fluid">
        <div className = "pro-value">
				  <div className="col-sm-6 camp-property">Course:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.course)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Fee:</div>
					<div className ="col-sm-6 camp-value">${this.getValue(camp.fees)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Website:</div>
					<div className ="col-sm-6 camp-value">{this.getWebsite(camp.website)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Facebook:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.facebook)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Twitter:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.twitter)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Graduation:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.graduation_rate)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Employment:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.employment_rate)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Avg Salary:</div>
					<div className ="col-sm-6 camp-value">{this.getValue(camp.average_salary)}</div>
				</div><div className = "pro-value">
				  <div className="col-sm-6 camp-property">Overall:</div>
					<div className ="col-sm-6 camp-value">
					  {this.getRating(camp.overall)}
					</div>
				</div><div className = "pro-value">
				  <div className="col-sm-6 camp-property">Curriculum:</div>
					<div className ="col-sm-6 camp-value">{this.getRating(camp.curriculum)}</div>
				</div>
				<div className = "pro-value">
				  <div className="col-sm-6 camp-property">Teachers:</div>
					<div className ="col-sm-6 camp-value">{this.getRating(camp.instructor)}</div>
				</div><div className = "pro-value">
				  <div className="col-sm-6 camp-property">Job Assistance:</div>
					<div className ="col-sm-6 camp-value">{this.getRating(camp.job_assistance)}</div>
				</div>
				<br/>
				</div>
			</div>
			</div>

		);
	}

	renderReviews(){
		  return _.map(this.props.ratings, rating=>{
        return(
					<div className="reviews-section">
	          <div className="reviewer-info">
						 <div className="col-sm-3 name">
             Arslan Shakoor

             </div>
             <div className="col-sm-3 status">
             Student
             </div>
             <div className="col-sm-4 course">
               Web Development Program
             </div>
             <div className="col-sm-2 date">
              {this.getFormatDate(rating.created_at)}
             </div>
            </div>
            <div className="row reviewer-star">

              <div className="col-sm-3 ">
                {this.getRating(rating.overall_review)}
                OVERALL
              </div>
              <div className="col-sm-3">
                {this.getRating(rating.curriculum_review)}
                CURRICULUM
              </div>

              <div className="col-sm-3">
                {this.getRating(rating.instructor_review)}
                TEACHERS
              </div>
              <div className="col-sm-3">
               {this.getRating(rating.job_assistance_review)}
                JOB ASSISTANCE
              </div>
            </div>
            <div className= "review-title">{rating.title}</div>
            <div className= "review-description">{rating.description}</div>
					</div>
				);
			});
	}

	render(){
    const {camp} = this.props;
		if(!camp){
			return <div>Loading...</div>
		}

		return(
		  // <div>
			//
      //   <button className = "btn btn-danger" onClick={this.onDeleteClick.bind(this)}>delete</button>
      //   <Link to = {`/camps/edit/${this.getValue(camp.id}`}>
      //   <button className = "btn btn-primary">Edit</button>
      //   </Link>

			<div>
			  {this.renderHeader()}
				<div className="row">
				  <div className="col-md-8">
					 {this.renderReviews()}
					</div>
					<div className="col-md-4">
					  {this.renderCampDetails()}
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({camps,ratings}, ownProps){
	return { camp: camps[ownProps.match.params.id],
		ratings
	}
}

export default connect(mapStateToProps, { fetchCamp, deleteCamp, fetchRating })(CampsShow)
