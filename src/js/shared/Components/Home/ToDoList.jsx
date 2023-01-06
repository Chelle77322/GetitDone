import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import { toggleToDo } from "../../Actions/action.js";
import "../../../../../style/main-style.scss";

const ToDoList = ({ToDo, toggleToDo}) => (
    <li className="li" onClick={()=>
    toggleToDo(ToDo.id)}>
        {ToDoList && ToDo.completed ? "👐 ": "🤟"}{" "}
        <span className={cx("li", ToDo && ToDo.completed && "li")}>
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

