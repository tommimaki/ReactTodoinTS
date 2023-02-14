import React, { useState } from "react";
import TodoTable from './Todotable';





interface Todo {
  desc: string;
  date: string;
  priority:string;
}

const Todolist = () => {
  const [list, setList] = useState<Todo[]>([]);

  const [todo, setTodo] = useState<Todo>({
    desc: "",
    date: "",
    priority: "",
  });

  const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodo: React.MouseEventHandler<HTMLButtonElement> = (e)=> {
    e.preventDefault();
    setList([...list,{ ...todo, priority }]);

    setTodo({ desc: "", date: "", priority: "low" });
    setPriority("low");
  };

  const [priority, setPriority] = useState<string>("low");
  const priorityChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const deleteTodo = (index: number) => {
    setList(list.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <div>
        <h2>add todos</h2>
        <br />
        <br />
        <label>
          Description:
          <input
            type="text"
            onChange={inputChanged}
            value={todo.desc}
            name="desc"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            onChange={inputChanged}
            value={todo.date}
            name="date"
          />
        </label>
        <label>
          Priority:
          <select value={priority} onChange={priorityChanged}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>


        <button onClick={addTodo}>add</button>
      </div>

      <TodoTable list={list} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todolist;





