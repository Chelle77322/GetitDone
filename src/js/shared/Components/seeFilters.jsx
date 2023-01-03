import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {seeFilter} from "../Actions/action.js"
import { SEE_FILTERS } from "../Constants/constants.js";
import context from "react-bootstrap/esm/AccordionContext";

const seeFilters = ({ activeFilter, seeFilter})=> {
    return (
        <div className = "see-filters">
            {Object.keys(SEE_FILTERS).map(filterKey => {
                const currentFilter = SEE_FILTERS[filterKey];
                return (
                    <span
                    key={`see-filters-${currentFilter}`}
                    className={context("filter",
                    currentFilter === activeFilter && "filter--active")}
                    onClick={()=>{
                        seeFilter(currentFilter)
                    }}
                    >
                    {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};
const mapStateToProps = state => {
    return { activeFilter: state.seeFilter};
};
export default connect(
    mapStateToProps,{seeFilter})(seeFilters);
