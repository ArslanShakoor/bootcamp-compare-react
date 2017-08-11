import { combineReducers } from 'redux';
import CampsReducer from './reducer_camps';
import { reducer as newCampReducer} from 'redux-form'

const rootReducer = combineReducers({
   camps: CampsReducer,
   form: newCampReducer
});

export default rootReducer;

