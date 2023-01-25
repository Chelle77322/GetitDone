import React, {Component} from "react";
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import "../../../../style/main-style.scss";



export default class NavigationBar extends Component{
	
	render(){	
		return(
			<div>
				<Navbar fixedTop inverse className = "navigation">
			        <Nav  >
			        	<LinkContainer to="/">
				          <NavItem >Home</NavItem>
				        </LinkContainer>
				        <LinkContainer to="/help">
				          <NavItem >Help</NavItem>
				        </LinkContainer>	      				  
			        </Nav>
		      	</Navbar>

			</div>
		);
	}
}
