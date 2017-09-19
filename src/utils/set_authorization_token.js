import axios from 'axios';

export default function setAuthorizationToken(token, email){
	if( token && email ){
		axios.defaults.headers.common = {
			'X-User-Email' : email,
			'X-User-Token' : token
		}
	}
	else{
		delete axios.defaults.headers.common['Authorization'];
	}

}
