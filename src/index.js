import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Layout from "./js/shared/Components/Layout.jsx";
import allReducer from "./js/shared/Reducers/AllReducers.js"
//import Help from "./js/shared/Components/Help/Help.jsx";

const initialState = window.__REDUX_STATE__
const store = createStore(allReducer,initialState);
console.log(store.getState());


const app = ReactDOM.createRoot(document.getElementById('app'))
console.log(app);

app.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
<Layout/>

	</Provider>
	
	,);
