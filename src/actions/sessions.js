import axios from 'axios';
import  setAuthorizationToken from '../utils/set_authorization_token';
export const CREATE_USERS = "create_users";
export const DESTROY_USERS = "destroy_users";

// export const CREATE_SESSIONS = 'create_sessions';
const SESSION_URL="http://localhost:3000";


export function createUsers(values){
	const request = axios.post(`${SESSION_URL}/user`, values);
	console.log(request);
	return{
		type: CREATE_USERS,
		payload: request
	}
}

export function destroyUsers(){
	const request = axios.delete(`${SESSION_URL}/sessions`)
	return{
		type: DESTROY_USERS,
		payload: request
	}
}


export function fetchSessions(values){

	return dispatch => {
		return axios.post(`${SESSION_URL}/sessions`, values).then(res => {
			
			const email = res.data.data.user.email;
			const token = res.data.data.user.authentication_token;
			console.log(email);
			console.log(token);
			 
			localStorage.setItem('token', token);
			localStorage.setItem('email', email);
			setAuthorizationToken(token, email)
		})
	}
	// const request = axios.post(`${Session_URL}/sessions`, values);
	// return{
	// 	type:CREATE_SESSIONS,
	// 	payload:request
	// };
}