var $ = require("jquery");
var Rx = require("rxjs");

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

  element.click(function(event) {
    state.done = !state.done;
    element = `<div id=${state.id}>${state.description} - ${state.done}</div>`;
    $("#" + state.id).replaceWith(element);
  });

  var self = {
    appendTo: querySelector => element.appendTo($(querySelector))
  };

  return self;
};

module.exports = TodoItem;
