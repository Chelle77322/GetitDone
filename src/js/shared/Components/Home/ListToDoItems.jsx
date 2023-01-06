import React from "react";
import {connect} from "react-redux";
import ToDoList from "./ToDoList.jsx";
import {getToDosBySeeFilter} from "../../selectors.js"
import "../../../../style/main-style.scss"

const ListToDo = ({ToDo}) => (
	<ul className = "ul">
		{ToDoList && ToDoList.length ? ToDoList.map((ToDoList, index)=> {
			return <ToDoList key = {`ToDo-${ToDoList.id}`}
			ToDoList={ToDo} />;
		}): "Things Left To Do"
	}
	</ul>
);
const mapStateToProps = state => {
	const {seeFilter} = state;
	const ToDo = getToDosBySeeFilter(state, seeFilter);
	return {ToDo};
};
export default connect(mapStateToProps)(ListToDo);