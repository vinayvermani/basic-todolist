const $ = require("jquery");
const Rx = require("rxjs");
const R = require("ramda");

//create element
//create handler

const TodoItem = function(props) {
  var state = {
    id: props.id,
    description: props.description,
    done: props.done,
    parent: ""
  };
  var $element;
  const createElement = state => {
    $element = $(
      `<div id=${state.id}><div class=item-desc>${
        state.description
      }</div><div class=item-done>${state.done}</div></div>`
    );
    var doneSubscription = Rx.fromEvent(
      $(".item-done", $element)[0],
      "click"
    ).subscribe(event => {
      state.done = !state.done;
      doneSubscription.unsubscribe();
      $element.replaceWith(createElement(state));
      onDoneToggle.next(state);
    });
    return $element;
  };

  const appendTo = querySelector => {
    state.parent = querySelector;
    createElement(state).appendTo($(querySelector));
  };
  const onDoneToggle = new Rx.Subject();

  var self = {
    appendTo,
    onDoneToggle
  };
  return self;
};

module.exports = TodoItem;
