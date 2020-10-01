import React from "react"
import AddForm from "../components/addForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoList from "../components/todoList"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AddForm />
    <ToDoList />
  </Layout>
)

export default IndexPage
