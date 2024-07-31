import { useDispatch, useSelector } from "react-redux"
import { removeToDo } from "../features/todoSlicer"

export default function ViewToDo () {
  
  const todos = useSelector((state) => state.todos)
  
  const dispatch = useDispatch()
    

  return (
    <>
    <div className="mx-auto w-1/2 xl:w-1/3 h-1/2 mt-4 border-2 p-4 bg-black " >
      <h2 className="text-2xl text-white text-center mb-5">List</h2>
      
      {todos.map(todo => (
        <div key={todo.id}>
            <ul className="pl-2 my-3 rounded-xl bg-gray-700  flex justify-between  items-stretch overflow-hidden" >
              <li className="flex-grow overflow-clip py-2 text-gray-300" >{todo.text}</li>

              <button 
              type="button" 
              className="px-3 py-1 bg-purple-700 hover:flex-grow duration-300 transition-all" 
              >Update</button>

              <button 
              type="button" 
              className="px-3 py-1 bg-red-700 hover:flex-grow duration-300 transition-all"
              onClick={()=>{dispatch(removeToDo(todo.id))}}>
                Delete</button>
            </ul>
            
        </div>
      
      ))}  
                
    </div>
      
    </>
  
  )
}