import axios from 'axios';
import  setAuthorizationToken from '../utils/set_authorization_token';
import Alert from 'react-s-alert';
export const CREATE_USERS = "create_users";
export const DESTROY_USERS = "destroy_users";
export const FETCH_SESSIONS = "fetch_sessions";
export const LOGIN_FAILED = "LOGIN_FAILED";



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
	localStorage.setItem('email', null);
	const request = axios.delete(`${SESSION_URL}/sessions`)
	return{
		type: DESTROY_USERS,
		payload: request
	}
}


export function fetchSessions(values, callback){

	return dispatch => {
		axios.post(`${SESSION_URL}/sessions`, values).then(res => {

      console.log("sdfasdf");
			const email = res.data.data.user.email;
			const token = res.data.data.user.authentication_token;


			localStorage.setItem('token', token);
			localStorage.setItem('email', email);
			setAuthorizationToken(token, email);
			Alert.success('You are signed in. Weclome!', {
				 position: 'bottom',
			})

		}).
		then(()=> callback()).
		catch((err) =>  {
			if (err.response.status == 401){
				Alert.error('Email/Password combination is not correct', {
           position: 'bottom',
        })
			}
		})
	}
}
