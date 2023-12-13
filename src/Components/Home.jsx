import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../Data/Categories'

const Home = () => {
  return (
    <>
    <div className="home">

    <div className="title">
      <h1>Welcome to Technical Quiz</h1>
    </div>
    <div className="topic-container">
    {Categories.map((data) => (
      <Link to={`quiz/${data.value}`} className="topic">{data.category}</Link>
      ))}
    </div>
      </div>
    </>
  )
}

export default Home