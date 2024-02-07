import TodoContainer from "@/components/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <Container>
        <h1 className="my-10 text-3xl font-semibold text-center">My Todos</h1>
        <TodoContainer />
      </Container>
    </Container>
  );
};

export default Todo;
