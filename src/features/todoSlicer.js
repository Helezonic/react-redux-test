import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
  name : 'todo', // A variable
  initialState : { todos : [] }, //An object that is globally saved as 'state'
  reducers : { //An object of functions
    addToDo : (state, action) => { // A function, where action is the data you send, and state is the initialState
      const todo = { // An object created with the action
        id : nanoid(),
        text : action.payload
      }
      state.todos.push(todo) // Push to the state, state is mutated
    },
    removeToDo : (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter(todo => todo.id !== id) //Your state is mutated
    }
  }
})

export {todoSlicer}
export default todoSlicer.reducer
export const {addToDo, removeToDo} = todoSlicer.actions