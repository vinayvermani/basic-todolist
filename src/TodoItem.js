var $ = require("jquery");

const TodoItem = function(props) {
  var state = {
    id: props.id,
    description: props.description,
    done: props.done,
    deleted: false
  };
  var element = $(
    `<div id=${state.id}>${state.description} - ${state.done}</div>`
  );

  var self = {
    appendTo: querySelector => element.appendTo($(querySelector))
  };

  element.click(event => {
      console.log(event.target.id);
  });
  return self;
};

module.exports = TodoItem;
