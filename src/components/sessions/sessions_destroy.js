import React, {Component} from 'react';
import { destroyUsers } from '../../actions/sessions';
import { connect } from 'react-redux';


class SessionsDestroy extends Component{
	componentDidMount(){
		this.props.destroyUsers(()=>{
			//add the call back fundtio
			this.props.history.push('/');
		});
	}
	render(){
		return(
      <div>Logout</div>
		)
	}
}

export default connect(null, {destroyUsers})(SessionsDestroy)
