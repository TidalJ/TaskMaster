import Navbar from "./components/Navbar";
import Form from './components/Form';
import List from "./components/List";
import { useState } from "react";

export default function App() {

    const [items, setItems] = useState([
        { id: 1, text: "First" },
        { id: 2, text: "Second" },
        { id: 3, text: "Third" },
    ])


    const addItems = (item) =>
        setItems([...items, item])

    const deleteItems = (item) => {
        if (window.confirm("Delete This Item?")) {
            setItems(items.filter((current) => current.id !== item.id))
        }
    }

    const editItems = (item) => {
        const input = window.prompt("Update Text:", item.text)
        if (input) setItems(
            items.map((current) => (current.id === item.id) ? { ...current, text: input } : current)
        )
    }

    const clearItems = () =>
        setItems([])

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar items={items} clearItems={clearItems} />
            <div className="container pt-5">
                <div className="col-12 col-lg-6 mx-auto p-5 mt-5 border border-light rounded-2">
                    <Form addItems={addItems} />
                    <List items={items} editItems={editItems} deleteItems={deleteItems} />
                </div>
                <h1 className="text-center"> </h1>
            </div>
        </div>
    )
}