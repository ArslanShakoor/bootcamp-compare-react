import { combineReducers } from 'redux';
import CampsReducer from './reducer_camps';
import SessionsReducer from './reducer_sessions';

import { reducer as newCampReducer} from 'redux-form'

export const rootReducer = combineReducers({
   camps: CampsReducer,
   form: newCampReducer,
   sessions: SessionsReducer

});

export default rootReducer;

