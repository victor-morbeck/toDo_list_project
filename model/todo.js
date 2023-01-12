export class ToDo {
    #id;
    #title;
    #description;
    #done;
    #userId;

    constructor(id, title, description, done, userId) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#done = done;
        this.#userId = userId;
    }

    
}