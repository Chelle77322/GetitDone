import { combineReducers } from "redux";
import seeFilters from "./seeFilters.js";
import todoReduced from "./ToDoReducers.js";

const rootReducer = combineReducers({
     seeFilters, todoReduced
});
export default rootReducer
