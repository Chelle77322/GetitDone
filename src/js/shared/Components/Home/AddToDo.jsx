//import React, {Component} from "react";
//import ReactDOM from "react-dom"; 
//import Redux from "redux";
//import { connect} from "react-redux";
//import 'bootstrap/dist/css/bootstrap.min.css';


//import {AddItem} from "../../Actions/ToDoAction.js";

//import Grid from 'react-bootstrap/lib/Grid';
//import Row from 'react-bootstrap/lib/Row';
//import Col from 'react-bootstrap/lib/Col';
//import FormControl from 'react-bootstrap/lib/FormControl';
//import InputGroup from 'react-bootstrap/lib/InputGroup';
//import Button from 'react-bootstrap/lib/Button';


//class Add extends Component{
//	render(){	
	//	return(
	//		<div>

	//			<Grid>
	//			    <Row >
	//			      <Col xs={12} md={8}>
	//			    	<InputGroup>
	//						<FormControl type="text" ref="itemToAdd"/>
	//							<InputGroup.Button>
	//								<Button onClick= {(e) => {
	//									var newItem = findDOMNode(this.refs.itemToAdd).value
	//									this.props.dispatch(AddItem(newItem));
	//									ReactDOM.findDOMNode(this.refs.itemToAdd).value = "";
	//								}}>Add Item</Button>
	//							</InputGroup.Button>
	//					</InputGroup>
	//			      </Col>
	//			    </Row>
	//		    </Grid>

				

	//		</div>
	//	);
	//}
//}
//export default connect(null, {AddItem})(Add)