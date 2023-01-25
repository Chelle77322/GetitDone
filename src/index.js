import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import  store from "./js/shared/store.js"
import WhatToDo from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

const initalState = window.__REDUX_STATE__
console.log(store.getState());

const appElement = document.getElementById("app");



ReactDOM.render(
	<Provider store={store}>
		<WhatToDo />
	</Provider>,
appElement
	
	);
