import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onSubmit = (event) => {
    // 아무것도 없을 때 경우
    if (todo === "") {
      return;
    }
    event.preventDefault();
    setTodoList((curList) => [todo, ...curList]);
    //엔터 시 입력값 없애고 새로 시작.
    setTodo("");
    console.log(todoList);
  };
  const writeTodo = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={writeTodo}
          placeholder="todoAdd"
          type="text"
        />
        <button type="submit">Add To Do</button>
      </form>
      <br />
      <ul>
        {todoList.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
