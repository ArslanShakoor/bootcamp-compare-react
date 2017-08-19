import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchCamps } from '../actions';
import { Link } from "react-router-dom"


class CampsIndex extends Component{

	componentDidMount(){
		if(!this.props.sessions){
			return  <div> loadding</div>
		}


		console.log(this.props.sessions);
       this.props.fetchCamps();
	}

	renderPosts(){
		return _.map(this.props.camps, camp=>{ 
		return(	

			<li className = "list-group-item" key = { camp.id }> 
			<Link to = {`camps/show/${camp.id}`}>
			{camp.name}
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

function mapStateToProps({camps, sessions}) {
  return { camps, sessions };
}

 export default connect(mapStateToProps, { fetchCamps }) (CampsIndex);  