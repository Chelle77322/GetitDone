
import {ADD_TODO,TOGGLE_TODO, SET_FILTER} from "./actionTypes.js";

let nextToDoID = 0;
export const addToDO = content => ({
    type: ADD_TODO,
    payload: {
       id: nextToDoID ++,
        content
    }
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
});
export const setFilter = filter => ({
  type: SET_FILTER, payload: { filter}
});