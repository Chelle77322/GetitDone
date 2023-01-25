import React ,{Component} from "react";
import {connect} from "react-redux";
import {addToDO} from "../../Actions/action.js";
import "../../../../../style/main-style.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

 class AddToDo extends Component {
	constructor(props){
		super(props);
		this.state = { input: " "};
	}
	updateInput = input => {
		this.setState({ input });
	};
	handleAddToDo = () => {

this.props.addToDO(this.state.input);
this.setState({input: this.state.input});
	};
render(){
	return (
		<div>
			<Container>
				<Row>
					<Col xs={10} md={6}>
					<InputGroup>
					<FormControl type = "text" ref = "itemAdded"/>
					<InputGroup.Button>
					<Button onChange ={e => this.updateInput(e.target.value)}
			value={this.state.input}/>
		<button className="button" onClick={this.handleAddToDo}>Add To List</button>
					</InputGroup.Button>
					</InputGroup>
					</Col>
				</Row>
			
		
		</Container>
		</div>
	);
}
}
 export default connect (null,{addToDO})(AddToDo)
