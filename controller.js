import { ToDo } from "./model/todo.js";

import * as view from "./view/todo-view.js";

import { elements } from "./view/elements.js";

// Mudar endpoint caso o caminho seja diferente
const url = "http://localhost/todo_list/todo.php?id=1";

const controlToDoFromApi = async () => {
    try {
        let todo = new ToDo(url);
        await todo.getResults();
        view.showTodoList(todo.todoList);
    } catch (error) {
      console.log("Erro ao comunicar com a API");
    }
};

// Pegando dados da API ao carregar página
window.addEventListener("load", controlToDoFromApi);

// Listeners para butão e input vazio
elements.addButton.addEventListener("click", () => view.handleAddTask());
elements.input.addEventListener("change", () => view.handleInputChange());