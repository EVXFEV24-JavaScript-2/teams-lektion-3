import { useState } from "react";

// App -> HomePage -> Navbar -> Button
// INFO ---------------------->  INFO
// INFO <----------------------  INFO

function InputExample() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => alert(username)}>Visa text</button>
      <br />
      {username}
    </>
  );
}

function UsernameInput({ username, setUsername }) {
  return (
    <>
      <label>Username</label>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </>
  );
}

export function States() {
  const [i, setI] = useState(0);
  const [username, setUsername] = useState("");

  const [person, setPerson] = useState({
    name: "Ironman",
    age: 5,
  });

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(["Städa", "Handla", "Rösta"]);

  const addTodo = () => {
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  const addPersonAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((value, i) => i !== index));
  };

  return (
    <>
      {/*{i}<button onClick={() => setI(i + 1)}>Inc</button>*/}
      {/*<InputExample />*/}
      {/*<UsernameInput username={username} setUsername={setUsername}/>*/}

      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>

      <input
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <br />
      <button onClick={addTodo}>Add</button>
      <br />
      {person.age}
      <button onClick={addPersonAge}></button>
    </>
  );
}
