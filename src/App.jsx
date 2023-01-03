import React from "react";
import Add from "./js/shared/Components/Home/AddToDo.jsx";
import ToDoList from "./js/shared/Components/Home/ToDoList.jsx";
import seeFilters from "./js/shared/Components/seeFilters.jsx"

export default function WhatToDo() {
    return (
        <div className = "what-app">
            <h1> A little To Do List</h1>
            <Add />
            <ToDoList />
            <seeFilters />
        </div>
    )
}