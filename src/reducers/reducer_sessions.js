import _ from 'lodash';
import { CREATE_SESSIONS } from "../actions/sessions";
import { CREATE_USERS } from "../actions/sessions"
import { FETCH_SESSIONS } from "../actions/sessions"
import { LOGIN_FAILED} from "../actions/sessions"

export default function (state= {}, action) {
	// body...
	switch(action.type){
		case CREATE_USERS:
		  console.log(action.payload.data)
		  return action.payload.data
		case CREATE_SESSIONS:
		  console.log(action.payload.data)
		  return action.payload.data;
		case LOGIN_FAILED:
			return action.error;
		// case FETCH_SESSIONS:
		//   console.log("asdfg")
		// 	console.log(action.payload.data)
		// 	return action.payload.data;

		default:
		  console.log('default1x');
		  return state;
	}
}
