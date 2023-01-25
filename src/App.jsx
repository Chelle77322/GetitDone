import React from "react";
import AddToDo from "./js/shared/Components/Home/AddToDo.jsx";
import ToDoList from "../src/js/shared/Components/Home/ToDoList.jsx";
import SeeFilters from "./js/shared/Components/seeFilters.jsx"


import "bootstrap/dist/css/bootstrap.min.css"
import "../style/main-style.scss";


function WhatToDo() {
    return (
        <div className = "what-app">
            <AddToDo />
            <ToDoList />
            <SeeFilters />
           

        
            
        </div>
          
    )
  
}
export default WhatToDo