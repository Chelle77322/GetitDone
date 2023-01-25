import React, {Component} from "react";
//import { LinkContainer } from 'react-router-bootstrap';

import ListToDo from './Home/ToDoList.jsx';
import NavigationBar from "./NavigationBar.jsx";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';


import "../../../../style/main-style.scss";

export default class Layout extends Component{

	render(){	
		return(
			<NavigationBar />,
			<div>
				<Container>
				<ListToDo/>
				<Row>
					<Col>
				<div className = "theme-container">{this.props.children}
				
				</div>
				</Col>
				</Row>
				</Container>
				
			</div>
			
		);
		
	}
}