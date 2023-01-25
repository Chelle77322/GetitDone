import React from "react";
import {connect} from "react-redux";
import List from "./ToDo.jsx";
import {getToDosBySeeFilter} from "../../selectors.js"
import "../../../../../style/main-style.scss";

const ListToDo = ({ToDo}) => (
	<ul className = "ul">
		{List && List.length ? List.map((List, index)=> {
			return <List key = {`ToDo-${List.id}`}
			List={ToDo} />;
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

//** HAS POTENTIAL NEEDS FURTHER WORK RETURNS #31 & #130 minified React Errors */

//import React, {Component} from "react";
//import {connect} from "react-redux";
//import { DeleteItem, EditIconClicked, EditItem, CompleteItem} from "../../Actions/ToDoAction.js";

//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
//import "bootstrap/dist/css/bootstrap.min.css"


//const mapStateToProps = state => {
//	const {seeFilter} = state;
//	const ToDo = getToDosBySeeFilter(state, seeFilter);
//	return {ToDo};
//};

//class ToDoList extends Component {
 
  //  close(id, editedItem) {
    //    this.props.dispatch(EditItem(id, editedItem));
    //}
    //render(){
      //  return(
        //    <div>
          //      <Container>
            //        <Row>
              //          <Col xs={10} md={6}>
                //            <h2> Things to Complete</h2>
                  //      </Col>
                  //  </Row>
            //<Row>
              //  <Col xs={10} md={6}>
                //    <ListGroup>
                //    {this.props.items.map((items, index)=> {
                  //  return <ListGroupItem key={index}>
                    //    <Row>
                      //      <Col md ={6}>
                        //        <div className={items.completed ?"complete-item": ""} onClick={(e) => {
                          //          this.props.dispatch(CompleteItem(index, !items.completed));

                            //    }}>{items.text}
                              //  </div>
                           // </Col>
                           // <Col md={1}>
                             //   <Button onClick = {() => {
                               //     this.props.dispatch(DeleteItem(index));
                               // }}>Delete

                                //</Button>
                            //</Col>
                            //<Col md={1}>
                             //   <Button onClick = {(e) => {
                               //     this.props.dispatch(EditIconClicked(index));
                               // }}>Edit
                                    
                               // </Button>
                            //</Col>
                        //</Row>
//<Modal show={items.editItem}>
 //   <Modal.Header>
   //     <Modal.Title>Edit {items.text}</Modal.Title>
  //  </Modal.Header>
  //  <Modal.Body>
    //    <FormControl type="text" ref="itemEditText"/>

    //</Modal.Body>
   // <Modal.Footer>
     //   <Button onClick={()=>{
       //     var editedItem = (this.itemEditText).value
         //   this.close(index,editedItem)
           // console.log(this);
       // }}>Update Item</Button>
    //</Modal.Footer>

//</Modal>
      //                  </ListGroupItem>
        //            })}
          //          </ListGroup>
            //    </Col>
           // </Row>
            //    </Container>
           // </div>
        //);
    //}
//}
//export default connect(ToDoList);