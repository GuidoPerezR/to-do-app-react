import { useNavigate } from "react-router-dom";
import { updateTask } from "../api/tasks.api";

export function TaskCard({ task }) {
  const navigate = useNavigate();
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="bg-zinc-900 text-white p-5 rounded-full flex justify-between">
      <div className="flex gap-8">
        <div
          className="bg-purple-900 p-6 rounded-full"
          onClick={async () => {
            task.completed = true;
            await updateTask(task.id, task);
            handleRefresh();
          }}
        ></div>
        <div>
          <h1 className="text-xl font-bold capitalize">{task.title}</h1>
          <p className="text-gray-500 text-sm">{task.description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-purple-700 p-3 rounded-full font-bold"
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          Edit Task
        </button>
      </div>
    </div>
  );
}
