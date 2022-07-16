import Input from "../components/Input";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { useEffect, useState } from "react";

function TodoPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        case "all":
          setFilteredTodos(todos);
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <TodoContainer>
      <h1>Todos</h1>
      <Input
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 2% 0;
    font-family: system-ui;
    font-weight: 100;
    letter-spacing: 2px;
  }
`;

export default TodoPage;
