import React,{Component} from 'react'
import { connect } from 'react-redux' 
import { fetchCamps } from '../actions'


class CampsIndex extends Component{

	componentDidMount(){
       this.props.fetchCamps();
	}

	render(){
		return(

			<div> Bootcamps List </div>
        );
	}
} 

// function mapStateToProps(dispatch) {
// 	// body...
// 	return { camps};
// }

export default connect(null,{fetchCamps})(CampsIndex)