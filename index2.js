//var TodoItem = require("./src/TodoItem");

var TodoList = require("./src/TodoList");
var data = [
  { id: "a", description: "go to gym", done: true },
  { id: "b", description: "learn coding", done: false }
];

var list = TodoList(data);
list.appendTo(".to-do-app");
console.log("hi");
list.addClickSubject.subscribe(text => {
  list.addItem({
    id: "x",
    description: text,
    done: false
  });
});

//comments
// var items = data.map(item=>TodoItem(item));

// items.forEach(i=>{
//   i.appendTo(".to-do-app")
// });

// items[0].onDoneToggle.subscribe(function(event){
//   console.log(event);
// })

// items[1].onDoneToggle.subscribe(function(event){
//   console.log(event);
// })
