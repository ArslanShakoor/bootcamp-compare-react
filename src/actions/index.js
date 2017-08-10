import axios from 'axios';
export const FETCH_CAMPS = 'fetch_camps';
const ROOT_URL = 'http://localhost:3000/';

export function fetchCamps(){
	const request = axios.get('http://localhost:3000/camps');
	return{
		type: FETCH_CAMPS,
		payload: request
	};
}