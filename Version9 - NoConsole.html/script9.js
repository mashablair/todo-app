// Version 9

// ----- MODEL -----

var todoList = {
    todos: [],

    // we removed our this.displayTodos()

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function() {

        //Case 1:  if all true, make them all false
        //# of completed todos = # of all todos

        // Since we need to compare allTodos and completedTodos, let's create vars:
        var allTodos = this.todos.length;
        var completedTodos = 0;

        // Get # of completedTodos:
        for (var i=0; i<allTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // if # completedTodos = # allTodos, make them all false:
        if (completedTodos === allTodos) {
            // make all todos false:
            for (i=0; i < allTodos; i++) {
                this.todos[i].completed = false;
            }
        } else { // if # completedTodos != # allTodos:

        //Case 2: if some are true, make them all true
            for (var i=0; i<allTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

// ---- Handlers -----
// Handlers connect View (buttons/inputs) to Model and then update View:
// In Version 9 we escape console by adding view.displayTodos() to each handler:
var handlers = {

    addTodo: function() {
        //we get the input as a var
        var addTodoInputText = document.getElementById('addTodoInputText');
        //we run addTodo()
        todoList.addTodo(addTodoInputText.value);
        //we clear input
        addTodoInputText.value = '';
        //we run display
        view.displayTodos();

    },

    changeTodo: function() {
        // we grab our inputs from html:
        var changeTodoInputNumber = document.getElementById('changeTodoInputNumber');
        var changeTodoInputText = document.getElementById('changeTodoInputText');
        // we run changeTodo()
        todoList.changeTodo(changeTodoInputNumber.valueAsNumber, changeTodoInputText.value);
        // we clear input
        changeTodoInputNumber.value = '';
        changeTodoInputText.value = '';
        //display
        view.displayTodos();
    },

    deleteTodo: function() {
        // we grab our input from html:
        var deleteTodoInputNumber = document.getElementById('deleteTodoInputNumber');
        // we run deleteTodo from Model:
        todoList.deleteTodo(deleteTodoInputNumber.valueAsNumber);
        // we clear input
        deleteTodoInputNumber.value = '';
        // display
        view.displayTodos();
    },

    toggleCompleted: function() {
        // grab our input from html
        var toggleCompletedInputNumber = document.getElementById('toggleCompletedInputNumber');
        // we run our toggleCompleted from Model
        todoList.toggleCompleted(toggleCompletedInputNumber.valueAsNumber);
        // we clear input
        toggleCompletedInputNumber = '';
        // display
        view.displayTodos();
    },

    toggleAll: function() {
        debugger;
        // button is connected via onclick
        // run toggleAll from Model
        todoList.toggleAll();
        // display
        view.displayTodos();
    }

};


//  ---- VIEW ----
// View only deals with display, it doesn't change our data (but checks it):
var view = {

    displayTodos: function() {
        // grab the <ul>
        var todosUl = document.querySelector('ul');
        // clear the list to avoid adding same stuff to our list:
        todosUl.innerHTML = '';
        // the loop will check how many items in the list:
        for (i=0; i<todoList.todos.length; i++) {
            //create <li>
            var todoLi = document.createElement('li');
            // gets item from the Model:
            var todo = todoList.todos[i];
            // creates the var for final <li>:
            var todoTextWithCompletion = '';

            //if item completed, display like this:
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else { // otherwise, display like that:
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            // update todoLi using the .textContent property:
            todoLi.textContent = todoTextWithCompletion;
            // append to html:
            todosUl.appendChild(todoLi);
        }
    }
};






