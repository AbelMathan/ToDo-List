import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Footer from "./components/Footer";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const listItems = JSON.parse(localStorage.getItem("todo_list"));
  //   setItems(listItems);
  // }, [items]);

  // For List Operations
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleRemove = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  // For Adding items
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <main className="w-full h-[727px] md:h-[737px] overflow-hidden bg-gray-100">
      <div className="grid  grid-cols-3 gap-2 ">
        <div className="col-start-1 col-end-4 relative sticky top-0">
          <Header />
          <SearchItem search={search} setSearch={setSearch} />
        </div>
        <div className="col-start-1 col-end-4 overflow-y-scroll h-[349px] -mt-6 mb-10">
          <Items
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        </div>

        <div className="col-start-1 col-end-4 relative sticky bottom-0 ">
          <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handleForm={handleForm}
          />
          <Footer items={items} setItems={setItems} />
        </div>
      </div>
    </main>
  );
}

export default App;
