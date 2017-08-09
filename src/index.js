import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CampsIndex from './components/camps_index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   <div>
	    <Switch>
	       <Route path ="/" component={CampsIndex}/>
	    </Switch>
   </div>
   </BrowserRouter>
   </Provider>
  , document.querySelector('.container'));
