import React from "react";
//import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import  store from "./js/shared/store.js"
import App from "./App.jsx"


//import {configureStore} from "@reduxjs/toolkit"
//import todoReducer from "./js/shared/Reducers/ToDoReducers.js";
//import Help from "./js/shared/Components/Help/Help.jsx";
//const initialState = window.__REDUX_STATE__
//const store = configureStore(todoReducer, initialState);
//console.log(store.getState());


const appElement = createRoot(document.getElementById("app"))


render(
	<Provider store={store}>
		<App />
</Provider>,
appElement
	
	);
