// var todo = require("./to-do");
// var $ = require("jquery");
var TodoItem = require("./src/TodoItem");

var data = [
  { id: "a", description: "go to gym", done: true },
  { id: "b", description: "learn coding", done: false }
];

//todo.appendElementTo($(".to-do-app"), todo.createTodoListElement(data));
data.forEach(item => {
  TodoItem(item).appendTo(".to-do-app");
});
