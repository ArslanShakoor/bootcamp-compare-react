import React, {Component} from 'react';
import { fetchCamp } from '../actions';
import { deleteCamp } from '../actions';
import { connect} from 'react-redux';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';
import './style.css'

class CampsShow extends Component{

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.fetchCamp(id);
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
								  size={20}
								  value={3}
								  edit = {false}
						    />
							</div>
						</div>
					</div>
        </div>
      </header>

    );
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
      //   <Link to = {`/camps/edit/${camp.id}`}>
      //   <button className = "btn btn-primary">Edit</button>
      //   </Link>
			//
      //   <h3>{camp.name}</h3>
      //   <h3>{camp.fees}</h3>
      //   <h3>{camp.website}</h3>
			//
      // </div>
			<div>
			  {this.renderHeader()}
			</div>
		);
	}
}
function mapStateToProps({camps}, ownProps){
	return { camp: camps[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchCamp, deleteCamp })(CampsShow)
