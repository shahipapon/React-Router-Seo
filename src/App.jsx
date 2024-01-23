import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import DynamicMeta from "./components/DynamicMeta";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DynamicMeta
        title="How to Create Dynamic Meta Tags"
        description="Learn how to create dynamic meta tags in a React.js application for improved SEO."
        canonicalUrl="https://shahipapon.github.io/React-Router-Seo"
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/users">users</Link>
      </nav>

      {/* <Outlet /> */}
    </>
  );
}

export default App;
