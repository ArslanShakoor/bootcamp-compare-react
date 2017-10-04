import axios from 'axios';
import  setAuthorizationToken from '../utils/set_authorization_token';
import Alert from 'react-s-alert';
export const CREATE_USERS = "create_users";
export const DESTROY_USERS = "destroy_users";
export const FETCH_SESSIONS = "fetch_sessions";
export const LOGIN_FAILED = "LOGIN_FAILED";



// export const CREATE_SESSIONS = 'create_sessions';
const SESSION_URL="https://pure-sea-86815.herokuapp.com";


export function createUsers(values,callback){
	return dispatch => {
		const request = axios.post(`${SESSION_URL}/user`, values).then((response) =>{
			Alert.success('You are successfully signed up', {
				 position: 'bottom',
			})
		 return{
			type: CREATE_USERS,
			payload: request
		  }
		}).
		then(()=> callback()).
		catch((error) =>  {
			if (error.response.status == 422){
				Alert.error("Email has already taken", {
           position: 'bottom',
        })
			}

		})
	}
}

export function destroyUsers(callback){

	localStorage.setItem('email', null);
	return dispatch => {
		axios.delete(`${SESSION_URL}/sessions`).then((response) => {

			Alert.success('Logged out Successfully! See you soon...', {
				 position: 'bottom',
			})
		}).
		then(()=> callback()).
		catch((err) =>  {
				Alert.error(err, {
           position: 'bottom',
        })

		})
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
