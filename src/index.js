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


import Header from "./components/header";
import SessionsNew from './components/sessions/sessions_new';
import SessionsNewUser from './components/sessions/sessions_new_user';
import SessionsDestroy from './components/sessions/sessions_destroy';
import SessionsConfirmation from './components/sessions/sessions_confirmation';

import RatingsNew from './components/ratings/ratings_new';
import RatingsUser from './components/ratings/ratings_user';

import FrontIndex from './components/front/front_index';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.token) {
  setAuthorizationToken(localStorage.token, localStorage.email);

}

ReactDOM.render(
   <Provider store={ store }>
   <BrowserRouter>
   <div>
      <div><Header /></div>
	    <Switch>

         <Route path ='/camps/index' component = {CampsIndex} />
         <Route path ='/ratings/new' component = {RatingsNew}/>
         <Route path ='/ratings/user' component = {RatingsUser}/>
         <Route path ='/camps/new' component = {CampsNew}/>
         <Route path ="/camps/show/:id" component = {CampsShow}/>
         <Route path ="/camps/edit/:id" component = {CampsNew}/>
         <Route path ="/login" component = {SessionsNew}/>
         <Route path ="/logout" component = {SessionsDestroy} />
         <Route path ="/Signup" component = {SessionsNewUser}/>
         <Route path ="/" component = {FrontIndex}/>
         }/>
	    </Switch>
   </div>
   </BrowserRouter>
   </Provider>
  , document.querySelector('.container')
);
