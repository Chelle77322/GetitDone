import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import { toggleToDo } from "../../Actions/action.js";

const ToDoList = ({ToDo, toggleToDo}) => (
    <li className="to-do-item" onClick={()=>
    toggleToDo(ToDo.id)}>
        {ToDoList && ToDo.completed ? "Y": "N"}{" "}
        <span className={cx("todo-item__text", ToDo && ToDo.completed && "todo-item__text--completed")}>
            {ToDo.content}
        </span>
    </li>
);
export default connect(
    null,
    {toggleToDo}
)(ToDoList);

//**OLD CODE SHOULD WORK _ WILL REVISIT LATER */
//import React, {Component} from "react";
//import ListToDoItems from "./ListToDoItems.jsx";
//import Add from "./AddToDo.jsx";



//export default class ToDoList extends Component{
//	constructor() {
//		super();
//	}


//	render(){	
//		return(
//			<div>

//				<Add/>

//	    		<ListToDoItems/>

//			</div>
//		);
//	}
//}

