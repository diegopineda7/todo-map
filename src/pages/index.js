import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoList from "../components/todoList"


const todos = [
  { id: 1, name: 'Got to gym' },
  { id: 2, name: 'Buy new book' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ToDoList todos={todos} />
  </Layout>
)

export default IndexPage
