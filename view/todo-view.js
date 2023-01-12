export class ToDoView {
    input;
    addButton;
    tasksContainer;

    constructor() {
        this.input = document.querySelector(".input_adicionar_tarefa");
        this.addButton = document.querySelector(".botao_adicionar_tarefa");
        this.tasksContainer = document.querySelector("#tasks-container");
    }

    validateInput() {
        return this.input.value.trim().length > 0;
    }

    handleAddTask() {

        //Adicionando classe de erro caso o formulário não seja preenchido;
        if (!this.validateInput()) {
            this.input.classList.add("error");
        }

        //Criando Container que irá abrigar as tarefas

        const taskItemContainer = document.createElement("div");
        taskItemContainer.classList.add("task-item");

        const taskContent = document.createElement("p");
        taskContent.innerHTML = this.input.value;

        taskContent.addEventListener("click", () => handleClick(taskContent));

        const deleteItem = document.createElement("i");

        deleteItem.addEventListener("click", () => handleDeleteClick());
        //Adicionando as classes no ícone de lixeira das tasks
        deleteItem.classList.add("fa-solid");
        deleteItem.classList.add("fa-trash");

        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);

        this.tasksContainer.appendChild(taskItemContainer);

        this.input.value = "";
    }

    handleInputChange = () => {
        const inputIsValid = validateInput();

        if (inputIsValid) {
            return this.input.classList.remove("error");
        }
    };
    
}
