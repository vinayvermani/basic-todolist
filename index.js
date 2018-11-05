
var React = require("react");
var ReactDOM = require("react-dom");

//import {React} from "react";
var TodoItem = require("./src/components/TodoItem").TodoItem;
console.log(TodoItem);
ReactDOM.render(
    <TodoItem message="my friend" />, 
    document.getElementById("root")
);
