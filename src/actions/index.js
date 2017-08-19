import axios from 'axios';
export const FETCH_CAMPS = 'fetch_camps';
export const FETCH_CAMP = 'fetch_camp'; 
export const CREATE_CAMPS = 'create_camps';
export const DELETE_CAMP = 'delete_camp';
export const UPDATE_CAMP = 'update_camp';
const ROOT_URL = 'http://localhost:3000/';
const config = {headers: {"X-User-Email" : "marketingconso@gmail.com", "X-User-Token" : "-XuBGAQqbU9ySkfZChPA"}}

export function fetchCamps(){

	const {sessions} = getState()
    const request = axios.get(`${ROOT_URL}camps`, config);
	return{
		type: FETCH_CAMPS,
		payload: request
	};
}

export function createCamps(values){
	const request = axios.post(`${ROOT_URL}camps`, values);
	return{
		type: CREATE_CAMPS,
		payload: request
	}
}

export function fetchCamp(value){
	const request = axios.get(`${ROOT_URL}camps/${value}`);
	return{
		type: FETCH_CAMP,
		payload: request
	}
}

export function deleteCamp(value){
	const request = axios.delete(`${ROOT_URL}camps/${value}`)
	return{
		type: DELETE_CAMP,
		paylod: request
	}	
}

export function updateCamp(id,values){
	const request = axios.put(`${ROOT_URL}camps/${id}`, values)
	return{
		type: UPDATE_CAMP,
		paylod: request
	}	
}

