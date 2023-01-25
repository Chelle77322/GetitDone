import { SEE_FILTERS} from "../Constants/constants.js"
import {SET_FILTER} from "../Actions/actionTypes.js"

const initialState = SEE_FILTERS.ALL;
const seeFilters = (state = initialState, action)=> {
  switch (action.type){
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
          return state;
       }
    }
};
export default seeFilters;