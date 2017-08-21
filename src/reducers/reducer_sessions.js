import _ from 'lodash';
import { CREATE_SESSIONS } from "../actions/sessions";
 
 

export default function (state= {}, action) {
	// body...
	switch(action.type){
		case CREATE_SESSIONS:
		  console.log(action.payload.data)
		  return action.payload.data;
		 
		default: 
		  console.log('default1x');
		  return state;
	}
}