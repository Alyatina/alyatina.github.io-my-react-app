import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </header>

      <main className="main">
        <div className="card">
          <h1>React-застосунок </h1>
          <p className="subtitle">
            Vite + React
          </p>

          <input
            type="text"
            placeholder="Введіть своє імʼя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={() => setCount(count + 1)}>
            Натиснуто {count} разів
          </button>

          <p className="greeting">
            {name ? `Привіт, ${name}! 👋` : "Будь ласка, введіть імʼя"}
          </p>
        </div>
        <MyComponent />
      </main>
    </div>
  );
}

export default App;