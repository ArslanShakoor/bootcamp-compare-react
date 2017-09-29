import axios from 'axios';
import Alert from 'react-s-alert';
import setAuthorizationToken from '../utils/set_authorization_token';
export const CREATE_RATINGS = 'create_ratings';
export const FETCH_RATING = 'fetch_rating';
export const USER_RATING = 'user_rating';
const ROOT_URL="http://localhost:3000";

export function createRatings(values, callback){
  return dispatch => {
    const request = axios.post(`${ROOT_URL}/ratings`, values).then((response) => {

      Alert.success('Thank you! Your review has successfully submitted', {
         position: 'bottom',
      })
      return {
        type: CREATE_RATINGS,
        payload: request
      }
    }).then(()=> callback())
    .catch((err) => {
      Alert.error(err.response.data.message, {
         position: 'bottom',
      })
    })
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
