import { ADD_TODO, TOGGLE_TODO } from "../Actions/actionTypes.js";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function (state = initialState, action){
  switch (action.type){
    case ADD_TODO: {
      const {id, content} = action.payload;
      return {
        ...state,
        allIds : [...state.allIds, id],
        byIds : {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default: return state;
  }
}
//** Nothing wrong with code syntax might employ it later on when I have the basic redux call working through webpack */
//import update from 'immutability-helper';

//const initialState = { items:[]}

//let id = 0;

//const todoReducer = (state=initialState, action) => { 
  //switch (action.type) {
    //case 'ADD_ITEM':
      //return {
        //...state,
        //items: state.items.concat({id:id++,text:action.item,editItem:false,completed:false})
      //}
  	//case 'DELETE_ITEM':
      //return {
        //...state,
        //items:update(state.items, {$splice: [[action.itemId, 1]]})
      //}
    //case 'EDIT_ICON_CLICKED':
      //return {
        //...state,
        //items:update(state.items, {[action.itemId]: {editItem: {$set: true}}})
     // }
  	//case 'EDIT_ITEM':
	  //return {
      //  ...state,
        //items:update(state.items, {[action.itemId]: {editItem: {$set: false},text: {$set: action.item}}})
      //}

    //case 'COMPLETED_ITEM':
	  //return {
      //  ...state,
        //items:update(state.items, {[action.//itemId]: {completed: {$set: action.completed}}})
      //}
    //default:
      //return state
  //}
//}


