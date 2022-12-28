import React from "react";
import ReactDOM from "react-dom"; 

import ListToDoItems from "./ListToDoItems.js";
import AddTodo from "./AddToDo.js";



export default class TodoList extends React.Component{
	constructor() {
		super();
	}


	render(){	
		return(
			<div>

				<AddTodo/>

	    		<ListToDoItems/>

			</div>
		);
	}
}

Footer