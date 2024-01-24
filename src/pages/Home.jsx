import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DynamicMeta from '../components/DynamicMeta';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <DynamicMeta
      title="How to Create Dynamic Meta Tags"
      description="Learn how to create dynamic meta tags in a React.js application for improved SEO."
      canonicalUrl="https://shahipapon.github.io/React-Router-Seo"
    />
    
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    
    </div>
   

    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/users">users</Link>
    </nav>

    {/* <Outlet /> */}
  </>
  )
}

export default Home