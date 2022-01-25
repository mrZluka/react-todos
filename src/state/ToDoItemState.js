import { makeAutoObservable } from "mobx";

export class ToDoItemState {
    isComplete = false;
    text = "";
    id = Date.now()

    constructor() {
        makeAutoObservable(this)
    }
}


export class ToDoItemsStore {
    items = [];

    constructor() {
        makeAutoObservable(this)
    }

    createNewItem(value) {
        const item = new ToDoItemState();
        item.text = value;
        this.items.push(item);
        return item;
    }

    changeItemState(id, status) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.isComplete = status;
        }
    }

    removeItem(id) {
        const ndx = this.items.findIndex(item => item.id === id);
        if (ndx > -1) {
            this.items.splice(ndx, 1);
        }
    }
}
