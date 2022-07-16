import TodoPage from "./pages/TodoPage";
import styled from "styled-components";

function App() {
  return (
    <MainApp>
      <TodoPage />
    </MainApp>
  );
}

const MainApp = styled.div`
  height: 100%;
`;

export default App;
