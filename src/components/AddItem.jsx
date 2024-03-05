import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleForm }) => {
  const inputRef = useRef();
  return (
    <section className="flex justify-center relative  bottom-6">
      <div className="addToDo ">
        <form onSubmit={handleForm}>
          <input
            type="text"
            autoFocus
            required
            ref={inputRef}
            placeholder="Add ToDo"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
            className="input md:w-60 p-1 rounded-l-full drop-shadow-lg text-center"
          />
          <button
            type="submit"
            onClick={() => inputRef.current.focus()}
            className="add px-5 bg-green-500 cursor-pointer  ml-2 w-24 p-1 rounded-r-full drop-shadow-lg "
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
