import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
 
import promise from 'redux-promise';


import reducers from './reducers';
import CampsIndex from './components/camps_index';
import CampsNew from './components/camps_new';
import CampsShow from './components/camps_show';
import CampsEdit from './components/camps_edit'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   <div>
	    <Switch>
         <Route path ='/camps/new' component={CampsNew}/>
         <Route path ="/camps/show/:id" component={CampsShow}/>
         <Route path ="/camps/edit/:id" component={CampsEdit}/>
	       <Route path ="/" component={CampsIndex}/>
          
	    </Switch>
   </div>
   </BrowserRouter>
   </Provider>
  , document.querySelector('.container'));
