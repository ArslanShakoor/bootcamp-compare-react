import axios from 'axios'
export const FETCH_POSTS = 'fetch_posts'
const ROOT_URL = 'http://localhost:3000/'

export function fetchCamps(){
	
    
   const request = axios.get(`${ROOT_URL}camps`);
	return{
		type: FETCH_POSTS,
		paylaod: request
	}
}