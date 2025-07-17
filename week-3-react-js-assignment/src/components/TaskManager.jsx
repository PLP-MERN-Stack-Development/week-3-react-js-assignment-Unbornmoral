import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Card from "./Card";
import Button from "./Button";

const FILTERS = {
  All: () => true,
  Active: (t) => !t.completed,
  Completed: (t) => t.completed,
};

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (idx) => {
    setTasks(
      tasks.map((t, i) => (i === idx ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {Object.keys(FILTERS).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul>
        {tasks.filter(FILTERS[filter]).map((task, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between border-b py-2"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleTask(idx)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(idx)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;