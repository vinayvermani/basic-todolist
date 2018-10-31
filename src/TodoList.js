const $ = require("jquery");
const Rx = require("rxjs");
const TodoItem = require("./TodoItem");

const TodoList = function(props) {
  var state = {
    items: props,
    parent: ""
  };
  var $element;
  const createElement = state => {
    $element= $("<div class=todo-list></div>");
      state.items.forEach(item=>{
        TodoItem(item).appendTo($element);
      });
      return $element;
  };
  const appendTo = querySelector => {
      
    state.parent = querySelector;
    createElement(state).appendTo($(querySelector));
  };
  var self = {
    appendTo
  };
  return self;
};

module.exports = TodoList;
