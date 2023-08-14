import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between items-center">
      <Link to="/tasks">
        <h1 className="text-4xl text-purple-500 font-bold">Task App</h1>
      </Link>
      <div className="flex justify-end py-6">
        <button className="bg-purple-500 p-3 rounded-full font-bold">
          <Link to="/tasks-create">Create Task</Link>
        </button>
      </div>
    </div>
  );
}
