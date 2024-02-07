import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient  rounded-xl  p-[5px]">
        <div className="p-5 space-y-3 bg-white rounded-lg ">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No task available</p>
          ) : (
            todos.map((item) => <TodoCard {...item} key={item.id} />)
          )}
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
