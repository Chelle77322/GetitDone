import React, {Component} from "react";
import ListToDo from "./Home/ToDoList.jsx";
import NavigationBar from "./NavigationBar.jsx";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import "../../../../style/main-style.scss";

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
				<Container>
					<Row>
						<Col xs={10} md = {6}>
							<h1>{this.state.title}</h1>
						</Col>
					</Row>
					
				</Container>
				<Row>
					<ListToDo/>
					</Row>
			</div>
		)
	}
}