import React, {Component} from 'react';
import { userRating } from '../../actions/ratings'
import { connect} from 'react-redux';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';


class RatingsUser extends Component{

	componentDidMount(){
		this.props.userRating();
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


	renderReviews(){
		  return _.map(this.props.ratings, rating=>{
        console.log(rating);
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


		return(
		  // <div>
			//
      //   <button className = "btn btn-danger" onClick={this.onDeleteClick.bind(this)}>delete</button>
      //   <Link to = {`/camps/edit/${this.getValue(camp.id}`}>
      //   <button className = "btn btn-primary">Edit</button>
      //   </Link>

			<div>
				<div className="row">
				  <div className="col-md-8">
					 {this.renderReviews()}
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({camps,ratings}, ownProps){
	return {
		ratings
	}
}

export default connect(mapStateToProps, {userRating})(RatingsUser)
