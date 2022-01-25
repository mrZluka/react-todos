import './App.css';
import {AddItem} from "./components/addItem/AddItem";
import {Item} from "./components/item/Item";
import {ToDoItemsStore} from "./state/ToDoItemState";
import { observer } from "mobx-react-lite"

const itemStore = new ToDoItemsStore();
const App = observer(() => {
    const onAddItem = (value) => {
        itemStore.createNewItem(value);
    };
    const onItemStatusChange = ({id, state}) => {
        itemStore.changeItemState(id, state);
    };
    const removeItem = (id) => {
        itemStore.removeItem(id);
    };

    const TodosView = observer(({ todos }) => (
        <ul>
            {todos.map(data => (
                <Item itemData={data}
                      key={data.id}
                      onStatusChange={onItemStatusChange}
                      removeItem={removeItem} />
            ))}
        </ul>
    ))

    return (
        <div className="App">
            <header className="App-header">
                <h2>TODO list</h2>
            </header>
            <AddItem onAddItem={onAddItem}/>
            <main className={"App-body"}>
                <TodosView todos={itemStore.items}/>
            </main>
        </div>
    );
});

export default App;
