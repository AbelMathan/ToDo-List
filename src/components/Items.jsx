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
      <main className="bg-gray-200 w-80 sm:w-1/3 relative flex justify-center ">
        {items.length ? (
          <div className="ToDos w-72 sm:w-[80%] p-10 ">
            {items.map((item) => (
              <div
                className="ToDos flex gap-2 border-b-2  border-gray-300 pb-3 justify-between"
                key={item.id}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                  className="w-4"
                />

                <div className="flex justify-between w-60 ">
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
              </div>
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
