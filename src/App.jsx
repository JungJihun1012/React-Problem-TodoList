import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <Container>
      <Title>맛있는 Todo List</Title>
      <InputContainer>
        <TodoInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요..."
        />
        <AddButton onClick={addTodo}>추가</AddButton>
      </InputContainer>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <TodoText
              onClick={() => toggleTodo(index)}
              completed={todo.completed}
            >
              {todo.text}
            </TodoText>
            <DeleteButton onClick={() => deleteTodo(index)}>삭제</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TodoText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
export default App;