import React from "react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AddForm from "../components/addForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoList from "../components/todoList"
import reducer from '../services/reducer'

const store = createStore(reducer)

const IndexPage = () => (
  <Layout>
    <Provider store={store}>
      <SEO title="Home" />
      <AddForm />
      <ToDoList />
    </Provider>
  </Layout>
)

export default IndexPage
