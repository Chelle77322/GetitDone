import React from "react";
import ReactDOM from "react-dom"; 
import NavigationBar from "../NavigationBar.js";


export default class Help extends React.Component{
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

