import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  //Hook para redireccionar
  const navigate = useNavigate();
  //Hook para mostrar los parametros que se envian en la url
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Task updated", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createTask(data);
      toast.success("Task created", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
        setValue("completed", res.data.completed);
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-zinc-900 p-10 mb-4">
        <label>Title:</label>
        <input
          className="bg-zinc-700 p-3 w-full mb-2"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>this field is required</span>}
        <label> Description:</label>
        <textarea
          className="bg-zinc-700 p-3 w-full mb-2"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>this field is required</span>}
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-lg">
            <input
              type="checkbox"
              id="inputCompleted"
              {...register("completed")}
            />
            <label>Completed</label>
          </div>
          <button className="bg-purple-500 p-3 rounded-full font-bold">
            Save Task
          </button>
        </div>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-full font-bold"
          onClick={async () => {
            await deleteTask(params.id);
            toast.success("Task deleted", {
              position: "bottom-center",
              style: {
                background: "#101010",
                color: "white",
              },
            });
            navigate("/tasks");
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
