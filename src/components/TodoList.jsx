import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <ListOfTodos>
      {filteredTodos?.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </ListOfTodos>
  );
}

const ListOfTodos = styled.div`
  max-width: 733px;
  width: 100%;
  margin: 0 auto;
`;

export default TodoList;
