import "./App.css";
import { Lifecycles } from "./Lifecycles";
import { States } from "./States";

// Exercise 7
function SortedNumberList(props) {
  const sorted = props.nums.sort();

  return (
    <ol>
      {sorted.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ol>
  );
}

// Exercise 8
function Sum(props) {
  let sum = 0;
  for (let num of props.numbers) {
    sum += num;
  }

  return <span>{sum}</span>;
}

// Exercise 9
function SumWithDestructuring({ numbers }) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  return <span>{sum}</span>;
}

// Exercise 10 - de måste vara exakt samma: 'myProp'

// Exercise 11
function Notification({ title, message }) {
  return (
    <div className="notification-wrapper">
      {title}
      <div className="notification-content">{message}</div>
    </div>
  );
}

function App() {
  return <Lifecycles />;
  return <States />;

  return (
    <>
      <SortedNumberList nums={[3, 5, 3, 2]} />
      <Sum numbers={[1, 6, 45, 200]} />

      <Notification title="Fel input" message="Du måste ange ett lösenord" />

      {/* Exercise 17 */}
      <input
        onChange={(event) => {
          console.log(event.target.value);
        }}
      ></input>

      <Exercise22 />
    </>
  );
}

// Exercise 22
function Exercise22() {
  const todos = [
    {
      description: "Clean kitchen",
      completed: false,
      createdDate: new Date(),
    },
    {
      description: "Buy groceries",
      completed: true,
      createdDate: new Date(),
    },
    {
      description: "Visit friend",
      completed: false,
      createdDate: new Date(),
    },
    { description: "Call work", completed: true, createdDate: new Date() },
  ];

  return (
    <div>
      <h1>TODOS</h1>
      <ol>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ol>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <li key={todo.description}>
      <div>{todo.description}</div>
      <div>{todo.completed ? "Completed" : "In progress"}</div>
    </li>
  );
}

export default App;
