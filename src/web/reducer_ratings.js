import _ from 'lodash';
import {FETCH_RATING} from '../actions/ratings';
import {USER_RATING} from '../actions/ratings';

export default function (state = {}, action){
  switch(action.type){
    case FETCH_RATING:
      console.log("fetch the rating");
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    case USER_RATING:
    console.log("fetch the rating");
      return _.mapKeys(action.payload.data, 'id');
    default:
      console.log("rating detault");
      return state;
  }
}
