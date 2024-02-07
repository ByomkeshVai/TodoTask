import { useUpdateTodoMutation } from "@/redux/api/baseApi";
import { Button } from "./ui/button";
import { TTodoPriority } from "@/redux/features/todoSlice";
import DeleteTodo from "./DeleteTodo";
import AddTodoModal from "./AddTodoModal";

type TodoCardProps = {
  _id: string;
  title: string;
  priority: TTodoPriority;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TodoCardProps) => {
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const toggleCompleted = () => {
    updateTodo({
      _id,
      todo: {
        title,
        priority,
        description,
        isCompleted: !isCompleted,
      },
    });
  };
  return (
    <div className="flex items-center justify-between p-3 bg-white border rounded-md">
      <input
        onClick={toggleCompleted}
        type="checkbox"
        name="complete"
        id="complete"
        className="mr-2"
        defaultChecked={isCompleted}
      />
      <p className="flex-1 font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">
            {!isLoading ? "Done" : "Marking as incompleted..."}
          </p>
        ) : (
          <p className="text-orange-500">
            {!isLoading ? "Pending" : "Marking as completed..."}
          </p>
        )}
      </div>
      <div className="flex items-center flex-1">
        <div
          className={`
        size-3 rounded-full mr-4
        ${priority === "HIGH" && "bg-red-600"}
        ${priority === "MEDIUM" && "bg-yellow-600"}
        ${priority === "LOW" && "bg-green-600"}
        `}
        ></div>
        <p>{priority}</p>
      </div>
      <p className="flex-1">{description}</p>
      <div className="space-x-5">
        <DeleteTodo id={_id} />
        <AddTodoModal todo={{ _id, title, description, isCompleted, priority }}>
          <Button className="bg-[#5C53FE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        </AddTodoModal>
      </div>
    </div>
  );
};

export default TodoCard;
