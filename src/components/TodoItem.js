import React from "react";
import ReactDOM from "react-dom";

// class TodoItem extends React.Component {
//     render() {
//         return (
//             <h1>vermani</h1>
//         )
//     }
// }


function TodoItem(props) {
    return  <h1>{props.message}</h1>
}
module.exports.TodoItem = TodoItem;