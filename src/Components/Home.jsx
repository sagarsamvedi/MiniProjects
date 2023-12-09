import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="title">
      <h1>Welcome to Technical Quiz</h1>
    </div>
    <div className="topic-container">
            <Link to={'/quiz/linux'} className="topic">Linux</Link>
            <Link to={'/quiz/c++'} className="topic">C++</Link>
            <Link to={'/quiz/c'}className="topic">C</Link>
            <Link to={'/quiz/mysql'}className="topic">MySQL</Link>
            <Link to={'/quiz/javascript'}className="topic">JavaScript</Link>
            <Link to={'/quiz/html'}className="topic">HTML</Link>
    </div>
    </>
  )
}

export default Home