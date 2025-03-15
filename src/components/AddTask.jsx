import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmitt }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);
  return (
    <div className="my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs flex flex-col">
      <Input
        type="text"
        placeholder="digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="descriçãoda tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("preencha o título e a descrição da tarefa.");
          }
          onAddTaskSubmitt(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        adicionar
      </button>
    </div>
  );
}

export default AddTask;
