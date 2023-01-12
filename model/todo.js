export class ToDo {
    #api;
    todoList;

    constructor(api) {
        this.#api = api;
    }

    async getResults() {
        try {
            const response = await fetch(this.#api);
            this.todoList = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    
}