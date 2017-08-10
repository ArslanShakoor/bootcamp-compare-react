import { combineReducers } from 'redux';
import CampsReducer from './reducer_camps';

const rootReducer = combineReducers({
   camps: CampsReducer
});

export default rootReducer;

