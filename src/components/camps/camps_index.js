import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchCamps } from '../../actions';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';

class CampsIndex extends Component{

	componentDidMount(){
	  this.props.fetchCamps();
	}

	renderPosts(){
		return _.map(this.props.camps, camp=>{
  		return(

  				<Link to = {`show/${camp.id}`}>
					<div className = 'col-sm-3'>
						<div className = "camp-block">
							<div class="school-middle">
								<img className="favicon" src={`https://api.statvoo.com/favicon/?url=${camp.website}`}/>
								<div className="school-name"> {camp.name}</div>
							</div>
							<div className="stack">Ruby, Rails, Javascript</div>

							<div className = "review-decor">
							<p>

							i really liked this bootcamp and it transformed my life and i got the job very easily
							i have background of programming but i was not getting any job. I found it is the besy
							way to come into the market with right mind set.
							</p>
							</div>
							<div className='rating'>
								<ReactStars
									count={5}
									size={20}
									value={camp.avg}
									edit = {false}
								/>
							</div>
						</div>
					</div>
  				</Link>

  		);
	  });
	}

	render(){
		return(
		  <div>
        {this.renderPosts()}
      </div>
    );
	}
}

const mapStateToProps = (state) => {
  return {
    camps: state.camps
  };
};

export default connect(mapStateToProps, { fetchCamps }) (CampsIndex);
