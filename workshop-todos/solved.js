/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3 (FIND?)
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Steg 1: Render todos to DOM
const renderTodos = () => {
    todosEl.innerHTML = '';
    todos.forEach(todo => {
        if (todo.completed) {
            todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
        } else {
        todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
        }
    });
};
renderTodos();

// Listen for click-events on the `#todos` (the `<ul>`)
todosEl.addEventListener('click', (e) => {
    // Check if user clickes on a LI element
    if (e.target.tagName === "LI") {
        const clickedTodoTitle = e.target.innerText;
        // Search todos for the todo with the title clickedTodoTitle
        const clickedTodo = todos.find( (todo) => {
            return todo.title === clickedTodoTitle;
        } );

        // Change completed status of found todo
        // If it's true, then it changes to false and the other way around
        clickedTodo.completed = !clickedTodo.completed;

        // Render updated todos
        renderTodos();
    }
});

// Steg 2: Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', (e) => {
    // Prevent form from being submitted (to the server)
    e.preventDefault();

    // Create and push new todo into array
    todos.push({
        title: newTodoFormEl.newTodo.value,
        // title: document.querySelector('#newTodo').value,
        completed: false
    });

    // Render new todo to DOM
    renderTodos();

    // Empty input field, or use the reset form instead
    // newTodoFormEl.newTodo.value = '';

    // Reset form
    newTodoFormEl.reset();
});


