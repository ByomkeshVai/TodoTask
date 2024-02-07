import { useAutoAnimate } from "@formkit/auto-animate/react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo, TTodoFilter } from "@/redux/features/todoSlice";
import { useGetTodosQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { Button } from "./ui/button";

const TodoContainer = () => {
  const [parentRef] = useAutoAnimate();

  const [priority, setPriority] = useState<TTodoFilter>("ALL");
  const { data, isLoading } = useGetTodosQuery(priority);

  if (isLoading) return <p className="text-2xl font-semibold">Loading...</p>;

  const tasksPending = data.data.filter(
    (task: TTodo) => !task.isCompleted
  ).length;

  const tasksHighPriority = data.data.filter(
    (task: TTodo) => !task.isCompleted && task.priority === "HIGH"
  ).length;

  const filteredTodos = [...data.data].sort((a, b) => {
    return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
  });
  return (
    <>
      <div className="bg-primary-gradient rounded-xl p-[5px] mb-3">
        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
          <AddTodoModal todo={null}>
            <Button className="text-xl font-semibold bg-primary-gradient">
              Add Todo
            </Button>
          </AddTodoModal>
          {data?.data?.length > 0 ? (
            <h2 className="inline-block px-2 text-lg font-semibold text-center text-transparent bg-primary-gradient bg-clip-text">
              You have currently {tasksPending} tasks pending and{" "}
              {tasksHighPriority ? tasksHighPriority : "none"} have high
              priority.
            </h2>
          ) : (
            ""
          )}

          <TodoFilter priority={priority} setPriority={setPriority} />
        </div>
      </div>
      <div className="bg-primary-gradient  rounded-xl p-[5px]">
        <div ref={parentRef} className="p-5 space-y-5 bg-white rounded-lg ">
          {data?.data?.length > 0 ? (
            filteredTodos.map((todo) => <TodoCard key={todo._id} {...todo} />)
          ) : (
            <p className="text-center text-gray-500">No task available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
