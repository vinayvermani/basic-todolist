const $ = require("jquery");
const Rx = require("rxjs");
const TodoItem = require("./TodoItem");

const TodoList = function(props) {
  var state = {
    items: props,
    $items: [],
    parent: ""
  };
  var $element;
  var addClickSubject = new Rx.Subject();
  const createElement = state => {
    $element = $(
      `<div class=todo-list>` +
        `<div class=item-control>` +
        `<input type=text id=todo-input>` +
        `</div>` +
        `</div`
    );

    state.items.forEach(item => {
      var $item = TodoItem(item);
      $item.appendTo($element);
      state.$items.push($item);
    });
    var x = Rx.fromEvent($("#todo-input", $element)[0], "keyup")
      .subscribe(event => {
        if(event.keyCode===13) { addClickSubject.next($("#todo-input").val()); }
      });
    return $element;
  };
  const appendTo = querySelector => {
    state.parent = querySelector;
    console.log(querySelector);
    createElement(state).appendTo($(querySelector));
  };
  const addItem = item => {
    var $item = TodoItem(item);
    $item.appendTo($element);
    state.items.push(item);
    state.$items.push($item);
  };

  var self = {
    appendTo,
    addItem,
    addClickSubject
  };
  return self;
};

module.exports = TodoList;
