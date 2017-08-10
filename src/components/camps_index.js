import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchCamps } from '../actions';


class CampsIndex extends Component{

	componentDidMount(){
       this.props.fetchCamps();
	}

	renderPosts(){
		return _.map(this.props.camps, camp=>{ 
		return(	
			<li className = "list-group-item" key = { camp.name }> 
			{camp.name}
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

function mapStateToProps({camps}) {
  return { camps };
}

 export default connect(mapStateToProps, { fetchCamps }) (CampsIndex);  