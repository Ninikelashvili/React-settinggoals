import styled from "styled-components";
import { GrAdd } from "react-icons/gr";
import Select from "react-select";

function Input({ setInputText, todos, setTodos, inputText, setStatus }) {
  const options = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "uncompleted", label: "Uncompleted" },
  ];

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return "";
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.value);
  };

  return (
    <TodoInputDiv>
      <TodoForm>
        <TodoInput
          value={inputText}
          type="text"
          placeholder="Type Here"
          onChange={inputTextHandler}
        />
        <TodoButton onClick={todoSubmitHandler}>
          <GrAdd />
        </TodoButton>
        <Select options={options} onChange={statusHandler} />
      </TodoForm>
    </TodoInputDiv>
  );
}

const TodoInputDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const TodoInput = styled.input`
  padding: 20px;
  max-width: 500px;
  width: 100%;
  border: none;
  outline: none;
`;
const TodoButton = styled.button`
  background: transparent;
  background-color: #ba58ff;
  padding: 16px 27px;
  border: none;
  outline: none;
  font-size: 20px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  svg {
    path {
      stroke: white;
    }
  }
  :hover {
    background-color: #ae3dff;
  }
`;
const TodoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Input;
