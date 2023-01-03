import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import  store from "./js/shared/store.js"
import WhatToDo from "./App.jsx"

//import {configureStore} from "@reduxjs/toolkit"
//import todoReducer from "./js/shared/Reducers/ToDoReducers.js";
//import Help from "./js/shared/Components/Help/Help.jsx";
const initialState = window.__REDUX_STATE__
//const store = configureStore(todoReducer, initialState);
console.log(store.getState());


const appElement = document.getElementById("app");



ReactDOM.render(
	<Provider store={store}>
		<WhatToDo />
</Provider>,
appElement
	
	);
