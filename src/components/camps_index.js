import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchCamps } from '../actions';
import { Link } from "react-router-dom"


class CampsIndex extends Component{

	 

	componentDidMount(){
		 
		console.log(this.props.sessions);
        this.props.fetchCamps();
	}

	renderPosts(){
		return _.map(this.props.camps, camp=>{ 
		return(	

			<li className = "list-group-item" key = { camp.id }> 
			<Link to = {`camps/show/${camp.id}`}>
			{camp.name}
			{this.props.sessions}
			</Link>
		 	</li>
		 	 
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
        sessions: state.sessions,
        camps: state.camps
         
    };
};

export default connect(mapStateToProps, { fetchCamps }) (CampsIndex);  