import { elements } from "./elements.js"

export const handleAddTask = () => {

    let inputIsValid = validateInput();

    //Adicionando classe de erro caso o formulário não seja preenchido;
    if (!inputIsValid) {
        return inputIsValid = elements.input.classList.add("error");
    }

    // Criando nova div (ainda sem enviar para a API)
    createNewTodoDiv(elements.input.value)

    elements.input.value = "";
}

//Validando se a entrada do input não está vazia
const validateInput = () => elements.input.value.trim().length > 0;

const handleClick = () => {

    const tasks = taskItemContainer.childNodes;

    for (const task in tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle("completed");
        }
    }
}

export const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return elements.input.classList.remove("error");
    }
};

export const showTodoList = (todoList) => {

    // Criando uma div para cada task da resposta da API
    todoList.forEach(todo => {
        createNewTodoDiv(todo.title);
    });
}

const createNewTodoDiv = (title) => {

    //Criando elementos que serão adicionados à tela
    const taskItemContainer = document.createElement("div");
    const taskContent = document.createElement("p");
    const deleteItem = document.createElement("i");

    // Adicionando valor passado como parâmetro
    taskContent.innerHTML = title; 
    
    // Adicionando função de deletar no ícone
    deleteItem.addEventListener("click", () => handleDeleteClick());

    // Adicionando as classes nos elementos
    taskItemContainer.classList.add("task-item"); // na div

    deleteItem.classList.add("fa-solid"); // no ícone
    deleteItem.classList.add("fa-trash");

    // Encapsulando elementos
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    elements.tasksContainer.appendChild(taskItemContainer);
}

