import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from "./actionTypes.js";

let nextTodoID = 0;
export const addToDO = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoID,
        content
    }
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
});
export const seeFilter = filter => ({
    type: SET_FILTER, payload: { filter}
});