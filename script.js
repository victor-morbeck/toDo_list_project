//Coletando os dados contido nos campos;

import { ToDo } from "./model/todo.js";

let todo = new ToDo(1, "Fazer um macas", null, false);

const new_task_input = document.querySelector(".input_adicionar_tarefa");
const new_task_button = document.querySelector(".botao_adicionar_tarefa");
const container = document.querySelector("#tasks-container");


//Validando se a entrada do input não está vazia
const validateInput = () => new_task_input.value.trim().length > 0;

 
const handleAddTask = () => {

    const inputIsValid = validateInput();

    //Adicionando classe de erro caso o formulário não seja preenchido;
    if(!inputIsValid){

        return inputIsValid = new_task_input.classList.add("error");

    }

    //Criando Container que irá abrigar as tarefas

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement('p');
    taskContent.innerHTML = new_task_input.value;

    taskContent.addEventListener('click', () => handleClick(taskContent))

    const deleteItem = document.createElement('i');

    deleteItem.addEventListener('click', () => handleDeleteClick());
    //Adicionando as classes no ícone de lixeira das tasks
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash");
    
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
   
    container.appendChild(taskItemContainer);
    
    new_task_input.value = "";
}

const handleClick = () => {

    const tasks = taskItemContainer.childNodes;
    
    for(const task in tasks){
        if(task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle("completed");
        }
    }
}

const handleInputChange = () => {

    const inputIsValid = validateInput();

     if(inputIsValid){
        return new_task_input.classList.remove("error")
     }
}



new_task_button.addEventListener("click", () => handleAddTask());
new_task_input.addEventListener("change", () => handleInputChange())

// function getData(url){
//     let request = new XMLHttpRequest()
  
//     request.open("GET", url, true);
//     request.send();
//     request.onload = function() {
//         if (this.status === 200) {
//           const json = JSON.parse(this.responseText);
//           console.log('json :>> ', json);
//         } else {
//           console.log("Request failed with status code: " + this.status);
//         }
//       };
//     return request.responseText;

// }

// const apiResponse = getData("http:localhost/todoApi/todo.php?id=1");

// const json = JSON.parse(apiResponse);
// console.log('json :>> ', json);

function getData(url) {
    let request = new XMLHttpRequest();
  
    request.open("GET", url, false);
    request.send();
  
    request.onload = function() {
      if (this.status == 200) {
        const json = JSON.parse(this.responseText);
        console.log('json :>> ', json);
      } else {
        console.error("Request failed with status code: " + this.status);
      }
    };
  }
  
  // const apiResponse = getData("http://localhost/todoApi/todo.php?id=1");
  const apiResponse = getData("viacep.com.br/ws/01001000/json/");

  