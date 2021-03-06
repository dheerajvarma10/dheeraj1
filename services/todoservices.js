const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
  createTodo: function(new_todo_from_request){
    const new_todo = new Todo(new_todo_from_request);
    return new_todo.save()
       .then(function(todo){
             return todo;
       });
  }
};
