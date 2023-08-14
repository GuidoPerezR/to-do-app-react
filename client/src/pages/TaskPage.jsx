import { TaskList } from "../components/TaskList";
import { TaskCompletedList } from "../components/TaskCompletedList";

export function TaskPage() {
  return (
    <div>
      <TaskList />
      <TaskCompletedList />
    </div>
  );
}
