import { combineReducers } from "redux";

import todoReduced from "./ToDoReducers.js";
import seeFilters from "./seeFilters.js";
import { AddItem,DeleteItem,EditIconClicked,EditItem,CompleteItem } from "./AllReducers.js";



const rootReducer = combineReducers({
    todoReduced,
    seeFilters,
    AddItem,
    DeleteItem,
    EditItem,
    EditIconClicked,
    CompleteItem

    
});
export default rootReducer
