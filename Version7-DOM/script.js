var todoList = {
  todos: [],

  // we added loop to display all todoText in our array:
  displayTodos: function() {
    // we introduced logic:
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log("My Todos: ");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {

    // Case 1: if all true, make them all false:
    // # of completed todos = # of all todos

    // Since we need to compare them, let's create vars:
    var allTodos = this.todos.length;
    var completedTodos = 0;

    // Get # of completed todos:
    for (var i = 0; i < allTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: if everything is true, make them all false:
    if (completedTodos === allTodos) {
      // make everthing false:
      for (var i = 0; i < allTodos; i++) {
        this.todos[i].completed = false;
      }
      // this.displayTodos(); -- we don't need display for every case - just in the end
    } else {



      // Case 2:  If some are true, make them all true:

      // even if only 1 is true, so we need to find the 1st true:
      for (var k = 0; k < allTodos; k++) {
        this.todos[k].completed = true;
      }
    }
    // after the case logic, it will display the outcome:
    this.displayTodos();
  }

};

var displayTodosButton = document.getElementById('displayButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleButton');

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});

// todoList.addTodo('skydiving');
// todoList.addTodo('fishing');
// todoList.addTodo('hunting');
// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(2);
// todoList.toggleAll();