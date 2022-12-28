import React from "react";
import ReactDOM from "react-dom"; 

import ListToDoItems from "../Components/Home/ListToDoItems.js";
import AddToDo from "../Components/Home/AddToDo.js";



export default class TodoList extends React.Component{
	constructor() {
		super();
	}


	render(){	
		return(
			<div>

				<AddToDo/>

	    		<ListToDoItems/>

			</div>
		);
	}
}

Footer