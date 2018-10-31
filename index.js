//var TodoItem = require("./src/TodoItem");
var TodoList = require("./src/TodoList");
var data = [
  { id: "a", description: "go to gym", done: true },
  { id: "b", description: "learn coding", done: false }
];

TodoList(data).appendTo(".to-do-app");
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

