import { ToDoView } from "../view/todo-view.js";


let view = new ToDoView();

view.addButton.addEventListener("click", () => view.handleAddTask())

