import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
      </div>
      <div className="bg-primary-gradient  rounded-xl  p-[5px]">
        <div className="p-5 space-y-3 bg-white rounded-lg ">
          <TodoCard />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
