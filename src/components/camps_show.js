import React, {Component} from 'react';
import { fetchCamp } from '../actions';
import { deleteCamp } from '../actions'; 
import { connect} from 'react-redux';
import { Link } from "react-router-dom";

class CampsShow extends Component{
	 
	componentDidMount(){
		const { id } = this.props.match.params;

		this.props.fetchCamp(id);
	} 
	onDeleteClick(){
		const { id } = this.props.match.params;
		this.props.deleteCamp(id);
	}
   
	render(){
		const {camp} = this.props;
		if(!camp){
			return <div>Loading...</div>
		}    
		return(
		  <div>
        <button className = "btn btn-danger" onClick={this.onDeleteClick.bind(this)}>delete</button>
        <Link to = {`/camps/edit/${camp.id}`}>
        <button className = "btn btn-primary">Edit</button>
        </Link>
        <h1>{camp.name}</h1>
        <h3>{camp.fees}</h3>
        <h3>{camp.website}</h3>
      </div>
		);
	}
}
function mapStateToProps({camps}, ownProps){
	return { camp: camps[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchCamp, deleteCamp })(CampsShow)