import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, 
		browserHistory, Link} from "react-router";

//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from "../shared/Components/Layout.jsx";
import Help from "../shared/Components/Help/Help.jsx";
import routes from "../shared/routes.js"
import allReducer from "../shared/Reducers/AllReducers.js";


const app = document.getElementById('app');

const initialState = window.__REDUX_STATE__
const store = configureStore(allReducer,initialState);
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
   		<Router history={browserHistory} routes={routes} />
		
  	</Provider>
	, app);
