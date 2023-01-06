import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {setFilter} from "../Actions/action.js"
import { SEE_FILTERS } from "../Constants/constants.js";

import "../../../style/main-style.scss"


const SeeFilters = ({ activeFilter, setFilter})=> {
    return (
        <div className = "see-filters">
            {Object.keys(SEE_FILTERS).map(filterKey => {
                const currentFilter = SEE_FILTERS[filterKey];
                return (
                    <span
                    key={`see-filters-${currentFilter}`}
                    className={cx("filter",
                    currentFilter === activeFilter && "filter--active")}
                    onClick={()=>{
                        setFilter(currentFilter)
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
    mapStateToProps,{setFilter})(SeeFilters);