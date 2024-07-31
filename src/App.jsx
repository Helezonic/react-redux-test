import { useState } from 'react'

//import './App.css'
import AddTodo from './components/AddToDo'
import { Provider } from 'react-redux'
import { store } from './app/store'
import ViewToDo from './components/ViewToDo'

function App() {


  return (
    <Provider store={store}>
      <AddTodo/>
      <ViewToDo/>
    </Provider>
  )
}

export default App
