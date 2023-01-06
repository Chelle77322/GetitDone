import React, {Component} from "react";
import ToDoList from "./Home/ToDoList.jsx";
import NavigationBar from "./NavigationBar.jsx";

//import Grid from 'react-bootstrap/lib/Grid';
//import Row from 'react-bootstrap/lib/Row';
//import Col from 'react-bootstrap/lib/Col';

import "../../../style/main-style.scss"
export default class Index extends Component {
	constructor(){
		super();
		this.state = {title: ' Things to do'};
	}
	changeTitle(title){
		this.setState({title});
	}
	render() {
		return(
			<div>
				<NavigationBar />
				<Grid>
					<Row>
						<Col xs={12} md = {8}>
							<h1>{this.state.title}</h1>
						</Col>
					</Row>
					<ToDoList/>
				</Grid>
			</div>
		)
	}
}