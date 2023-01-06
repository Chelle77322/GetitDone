import React from "react";
import AddToDo from "./js/shared/Components/Home/AddToDo.jsx";
import ListToDo from "./js/shared/Components/Home/ListToDoItems.jsx"
import SeeFilters from "./js/shared/Components/seeFilters.jsx";
import "./style/main-style.scss"


export default function WhatToDo() {
    return (
        <div className = "what-app">
            <h1> A little To Do List</h1>
            <AddToDo />
            <ListToDo />
            <SeeFilters />
            
        </div>
          
    )
  
}