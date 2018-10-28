var todo = require("./to-do");
var $ = require("jquery");

var data = [
  { description: "go to gym", done: true },
  { description: "learn coding", done: false }
];

todo.appendElementTo($(".to-do-app"), todo.createTodoListElement(data));
