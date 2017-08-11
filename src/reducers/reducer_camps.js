import _ from 'lodash';
import { FETCH_CAMPS } from "../actions";
import { FETCH_CAMP } from "../actions"

export default function (state= {}, action) {
	// body...
	switch(action.type){
		case FETCH_CAMPS:
		  return _.mapKeys(action.payload.data, 'id');
		case FETCH_CAMP:
		   return {...state, [action.payload.data.id]: action.payload.data}
		default:
		  console.log('default');
		  return state;
	}
}
