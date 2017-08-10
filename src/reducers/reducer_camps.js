import _ from 'lodash';
import { FETCH_CAMPS } from "../actions";

export default function (state= {}, action) {
	// body...
	switch(action.type){
		case FETCH_CAMPS:
		  return _.mapKeys(action.payload.data, 'id');
		default:
		  console.log('default');
		  return state;
	}
}
