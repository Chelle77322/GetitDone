import React from "react";
import {connect} from "react-redux";
import ToDoList from "./ToDoList.jsx";
import {getToDosBySeeFilter} from "../../selectors.js"

const ListToDo = ({ToDo}) => (
	<ul className = "todo-list">
		{ToDoList && ToDoList.length ? ToDoList.map((ToDoList, index)=> {
			return <ToDoList key = {`ToDo-${ToDoList.id}`}
			ToDoList={ToDo} />;
		}): "Nothing To Do"
	}
	</ul>
);
const mapStateToProps = state => {
	const {seeFilter} = state;
	const ToDo = getToDosBySeeFilter(state, seeFilter);
	return {ToDo};
};
export default connect(mapStateToProps)(ListToDo);