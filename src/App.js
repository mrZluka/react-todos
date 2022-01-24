import './App.css';
import {AddItem} from "./components/addItem/AddItem";
import {useState} from "react";
import {Item} from "./components/item/Item";

function App() {
    const [items, setItems] = useState([]);
    const onAddItem = (value) => {
        setItems([
            ...items,
            {
                id: Date.now(),
                value,
                selected: false
            }]);
    };
    const onItemStatusChange = ({id, state}) => {
        setItems(
            items.map(item => {
                if (item.id === id) {
                    item.selected = state;
                }
                return item;
            })
        )
    };
    const removeItem = (id) => {
        setItems(
            items.filter(item => item.id !== id)
        )
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>TODO list</h2>
            </header>
            <AddItem onAddItem={onAddItem}/>
            <main className={"App-body"}>
                {
                    items.map((data, ndx) => <Item itemData={data}
                                                   key={ndx}
                                                   onStatusChange={onItemStatusChange}
                                                   removeItem={removeItem}
                    />)
                }

            </main>
        </div>
    );
}

export default App;
