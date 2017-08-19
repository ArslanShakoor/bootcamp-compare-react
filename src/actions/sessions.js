import axios from 'axios';

export const CREATE_SESSIONS = 'create_sessions';
const Session_URL="http://localhost:3000";


export function fetchSessions(values){
	 
	const request = axios.post(`${Session_URL}/sessions`, values);
	return{
		type:CREATE_SESSIONS,
		payload:request
	};
}