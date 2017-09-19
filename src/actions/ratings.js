import axios from 'axios';
import setAuthorizationToken from '../utils/set_authorization_token';
export const CREATE_RATINGS = 'create_ratings';
export const FETCH_RATING = 'fetch_rating';
export const USER_RATING = 'user_rating';
const ROOT_URL="http://localhost:3000";

export function createRatings(values){
  const request = axios.post(`${ROOT_URL}/ratings`, values);
  return{
    type: CREATE_RATINGS,
    payload: request
  }
}

export function fetchRating(values){
  const request = axios.get(`${ROOT_URL}/ratings/${values}`);
  console.log(request);
  return{
    type: FETCH_RATING,
    payload: request
  }
}

export function userRating(){
  const request = axios.get(`${ROOT_URL}/ratings/user_camp`);
  console.log(request);
  return{
    type: USER_RATING,
    payload: request
  }

}
