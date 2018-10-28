
Writing my notes about how to proceed with this application

App Controller
==============
app

//constructor
todoList =	create list DOM element (selector, list)

todoList.render //refresh or render on DOM  

todoList.itemEdited   is an observable  //will be used for backend save

todoList.itemDeleted is an observable  //will be used for backend delete

todoList.addItem(item) 
	
todoList.successOnServerSave(item id);

todoList.errorOnServerSave(item id);

DOM
=========
TODOList
	TODOItem


function TODOList(selector,list) {
	this.selector = selector;
	this.list = list.map(item = > { })
} 	


	
	
backend controller
===================

backend.editListItem is an observable

backend.deleteListItem is an observable

backend.createListItem is an observable



