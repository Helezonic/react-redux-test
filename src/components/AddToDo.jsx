import { useDispatch } from "react-redux"
import { addToDo } from "../features/todoSlicer"
import { useState } from "react"


export default function AddTodo () {

  const [data,setData] = useState("")
  const dispatch = useDispatch()

  const formAdd = (e) => {
    e.preventDefault()
    if(data) {
      dispatch(addToDo(data))  
      setData("")
    }
  }

  return (
    <>
    <div className="w-screen ">
      <div className="xl:w-1/3 w-1/2 mx-auto flex justify-center flex-col my-2 p-2">
        <h1 className="text-3xl text-white font-bold font-sans my-4 text-center"> TO-DO</h1>
        <form className="px-4 flex " onSubmit={formAdd} >
          <label className="hidden px-2">Add Here</label>
          <input 
          type="text" 
          className="bg-sky-900 px-3 py-1 rounded-xl box-content w-full" 
          value={data} 
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter your todo..."
          ></input>
          <button 
          type="submit" 
          className="px-3 ml-2 py-1 bg-green-700 rounded-xl " >Add</button>
        </form>
      </div>
    </div>
    </>
  )
}