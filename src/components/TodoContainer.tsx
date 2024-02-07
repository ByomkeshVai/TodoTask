import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
      <div className="w-full h-full p-5 space-y-3 bg-white rounded-lg">
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
