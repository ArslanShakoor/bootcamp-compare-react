import axios from 'axios';
import setAuthorizationToken from '../utils/set_authorization_token';
export const CREATE_RATINGS = 'create_ratings';
const ROOT_URL="http://localhost:3000";
 

export function createRatings(values){
  const request = axios.post(`${ROOT_URL}/ratings`, values);
  return{
    type: CREATE_RATINGS,
    payload: request
  }
}



