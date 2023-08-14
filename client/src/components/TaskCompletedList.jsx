import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TaskCompletedList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className="flex flex-col gap-6 pt-10">
      <h1 className="text-4xl text-purple-500 font-bold">Completed Tasks</h1>
      {tasks.map((task) => {
        if (task.completed) {
          return <TaskCard task={task} key={task.id} />;
        }
      })}
    </div>
  );
}
