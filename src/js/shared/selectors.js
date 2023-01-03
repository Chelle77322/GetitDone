
import { SEE_FILTERS } from "./Constants/constants.js";

export const getToDosState = store => store.ToDo;

export const getToDoList = store =>
getToDosState(store)? getToDosState(store).allIds: [];

export const getToDoByID = (store, id)=>
getToDosState(store)? {...getToDosState(store).byIdS[id], id}: {};

export const getToDos = store =>
getToDoList(store).map(id => getToDoByID(store, id));

export const getToDosBySeeFilter =(store, seeFilter)=> {
    const allToDos = getToDos(store);
    switch(seeFilter)
    {
        case SEE_FILTERS.COMPLETED: 
        return allToDos.filter(ToDo => ToDo.completed);
        
        case SEE_FILTERS.INCOMPLETE: 
        return allToDos.filter(ToDo => !ToDo.completed)
        case SEE_FILTERS.ALL: 
        default: 
        return allToDos;
    }
};