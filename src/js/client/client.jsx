import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {Router,browserHistory} from "react-router";

import Layout from "../shared/Components/Layout.jsx";
import Help from "../shared/Components/Help/Help.jsx";
import routes from "../shared/routes.js"
import rootReducer from "../shared/Reducers/index.js";
import  'bootstrap/dist/css/bootstrap.css';

const app = document.getElementById('app')


//const initialState = window.__REDUX_STATE__
//const store = configureStore(rootReducer,initialState);



render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
<Layout/>
<Help />
	</Provider>,
	app
	
	);
