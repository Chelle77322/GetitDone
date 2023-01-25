import * as React from "react";
import {connect} from 'react-redux';
import cx from "classnames";
import {toggleToDo} from "../../Actions/action.js";
import "../../../../../style/main-style.scss";

const List = ({ToDo, toggleToDo})=> (
	<li className="li" onClick={()=>
	toggleToDo(ToDo.id)}>
		{List && List.completed ? "🐫🐫": "🥂 🥂 "}{" "}
		<span className={cx("li", ToDo && ToDo.completed && "li")}>
			{ToDo.content}
		</span>
	</li>
);
export default connect(
	null,
	{toggleToDo}
) (List);
 
