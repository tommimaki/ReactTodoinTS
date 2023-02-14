import React, { useState } from "react";
import TodoTable from './Todotable';
import Button from '@mui/material/Button'
import { Stack, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Todo1 {
  desc: string;
  date: Date;
  priority: string;
}

const Todolist = () => {
  const [list, setList] = useState<Todo1[]>([]);

  const [todo, setTodo] = useState<Todo1>({
    desc: "",
    date: new Date(),
    priority: "",
  });

  const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "date") {
      setTodo({
        ...todo,
        date: new Date(e.target.value),
      });
    } else {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    }
  };

  const addTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setList([...list, { ...todo, priority }]);

    setTodo({ desc: "", date: new Date(), priority: "low" });
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
        <DatePicker
          label="Date"
          value={todo.date}
          onChange={(newDate) =>
            setTodo({
              ...todo,
              date: newDate ?? new Date(),
            })    
          }
          renderInput={(params) => <TextField {...params} />}
        />
        <label>
          Priority:
          <select value={priority} onChange={priorityChanged}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <Button onClick={addTodo} style={{ marginLeft: "5px" }} variant="contained">
          add
        </Button>
      </div>

      <TodoTable list={list}  deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todolist;





