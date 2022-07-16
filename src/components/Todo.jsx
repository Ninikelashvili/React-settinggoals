import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function Todo({ text, todo, todos, setTodos }) {
  const [isActive, setIsActive] = useState(false);
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
    setIsActive((current) => !current);
  };
  return (
    <OneTodo className={isActive ? "completed" : ""}>
      {text}
      <div>
        <button onClick={completeHandler}>
          <MdDone />
        </button>
        <button onClick={deleteHandler}>
          <AiOutlineDelete />
        </button>
      </div>
    </OneTodo>
  );
}
const OneTodo = styled.li`
  width: 100%;
  padding-left: 20px;
  border: none;
  outline: none;
  background-color: #fff;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    padding: 15px 27px;
    transition: all 0.3s ease-in;
    :first-child {
      background-color: #00c700;
      color: #fff;
    }
    :last-child {
      background-color: #fd2f2f;
      color: #fff;
    }
    :hover {
      :first-child {
        background-color: #00a400;
      }
      :last-child {
        background-color: #d12828;
      }
    }
  }
`;

export default Todo;
