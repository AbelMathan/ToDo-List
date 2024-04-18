import Trash from "../trash.svg";
import Edit from "../Edit.svg";
import Check from "../check.svg";
import { useState, useEffect } from "react";

const Items = ({ items, setItems, handleCheck, handleRemove }) => {
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");

  // Effect to update edited item name when editing starts
  useEffect(() => {
    if (editingItemId !== null) {
      const editedItem = items.find((item) => item.id === editingItemId);
      if (editedItem) {
        setEditedItemName(editedItem.item);
      }
    }
  }, [editingItemId, items]);

  const handleEditClick = (id) => {
    setEditingItemId(id);
  };

  const handleSaveClick = () => {
    if (editingItemId !== null && editedItemName.trim() !== "") {
      const updatedItems = items.map((item) =>
        item.id === editingItemId ? { ...item, item: editedItemName } : item
      );
      setItems(updatedItems);
      setEditingItemId(null);
    } else {
      alert("Input field can't be empty");
      setEditingItemId(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <section className="flex justify-center relative drop-shadow-lg ">
      <main className="bg-gray-50 w-80 md:w-[600px] relative flex justify-center ">
        {items.length ? (
          <div className="ToDos w-72 sm:w-[80%] p-10 ">
            {items.map((item) => (
              <article
                className="ToDos flex gap-1 border-b-2  border-gray-300 pb-3 justify-between"
                key={item.id}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                  className="w-4 cursor-pointer"
                />

                <div className="flex justify-between w-72 ">
                  {editingItemId === item.id ? (
                    <>
                      <input
                        type="text"
                        value={editedItemName}
                        onChange={(e) => setEditedItemName(e.target.value)}
                        onBlur={handleSaveClick}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        required
                      />
                      <button onClick={handleSaveClick}>
                        <img src={Check} alt="OK" className="ml-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <label
                        style={
                          item.checked
                            ? { textDecoration: "line-through" }
                            : null
                        }
                        className="text-2xl capitalize "
                        onDoubleClick={() => handleEditClick(item.id)}
                      >
                        {item.item}
                      </label>
                      <button onClick={() => handleEditClick(item.id)}>
                        <img src={Edit} alt="Edit" className="" />
                      </button>
                    </>
                  )}
                </div>

                <button onClick={() => handleRemove(item.id)}>
                  <img src={Trash} alt="del" className="ml-3" />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="h-96 text-center items-center pt-40 text-3xl">
            Your list is Empty
          </p>
        )}
      </main>
    </section>
  );
};

export default Items;
