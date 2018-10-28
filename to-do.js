const $ = require("jquery");
const R = require("ramda");
const curry = R.curry;

const createItemTemplate = curry(
  item => `<div>${item.description} - ${item.done}</div>`
);

const createElement = curry(template => $(template));

const createTodoElement = R.compose(
  createElement,
  createItemTemplate
);

const createTodoListElement = R.map(createTodoElement);

const appendElementTo = curry((parentElem, childElem) =>
  parentElem.append(childElem)
);

const getElements = curry(querySelector => $(querySelector));

// edit DOM
function editTodoItemInList() {}

//edit DOM
function deleteTodoItemFromList() {}

//edit DOM
function addItemToList() {}

//edit DOM
function removeItemFromList() {}

function removeItemFromList() {}

module.exports = {
  createTodoListElement,
  appendElementTo,
  getElements
};
