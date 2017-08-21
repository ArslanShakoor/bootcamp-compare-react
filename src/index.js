import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import rootReducer from './reducers/index';
import promise from 'redux-promise';
import  setAuthorizationToken from './utils/set_authorization_token';


import reducers from './reducers';
import CampsIndex from './components/camps_index';
import CampsNew from './components/camps_new';
import CampsShow from './components/camps_show';
import CampsEdit from './components/camps_edit';
import SessionsNew from './components/sessions/sessions_new';
import Header from "./components/header"

 
 

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.token) {
   console.log(localStorage.token);
   console.log(localStorage.email)
  setAuthorizationToken(localStorage.token, localStorage.email);
   
}

ReactDOM.render(
   <Provider store={ store }>
   <BrowserRouter>
   <div>
      <div><Header /></div>
	    <Switch>
         <Route path ='/camps/new' component={CampsNew}/>
         <Route path ="/camps/show/:id" component={CampsShow}/>
         <Route path ="/camps/edit/:id" component={CampsNew}/>
         <Route path ="/login" component={SessionsNew}/>
	       <Route path ="/" component={CampsIndex}/>
         }
          
	    </Switch>
   </div>
   </BrowserRouter>
   </Provider>
  , document.querySelector('.container'));
