import React, {Component} from "react";
//import ReactDOM from "react-dom"; 
import NavigationBar from "../NavigationBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Help extends Component{
	constructor() {
		super();
	}


	render(){	
		return(
			<div>
				<NavigationBar/>
				<h1>Help Page</h1>
			</div>
		);
	}
}

