import { useEffect, useRef,useState } from "react"
import todo_icon from "../assets/todo_icon.png"
import TodoItmes from "./TodoItmes"

const Todo = () => {
 
    const [todolist, setTodolist] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])

    const inputRef=useRef()
const add=()=>{
   const inputText=inputRef.current.value.trim()
//    console.log(inputText)
if(inputText===""){
    return null
}
        const newTodo={
             id:Date.now(),
             text:inputText,
             isComplete:false
        }
    setTodolist((pre)=>[...pre,newTodo]);
    inputRef.current.value="";
}

const deleteTodo=(id)=>{
   setTodolist((prevsTodo)=>{
      return prevsTodo.filter((todo)=> todo.id !==id)
   })
}

const toggle=(id)=>{
   setTodolist((prvTodo)=>{
    return prvTodo.map((todo)=>{
        if(todo.id===id){
            return {...todo,isComplete:!todo.isComplete}
        }
        return todo
    })
   })
}

useEffect(()=>{
 localStorage.setItem("todos",JSON.stringify(todolist))
},[todolist])

  return (
    <div className="bg-white place-self-center max-w-md flex flex-col md:p-7 p-3 w-6/12 min-h-[550px] rounded-lg">
     {/* ----- title ----- */}

     <div className="flex mt-7 gap-2 items-center">
     <img src={todo_icon} alt="" className="w-6"/>
        <h1 className="text-2xl font-semibold">TO-DO List</h1>
     </div>

     {/* ----- input box ----- */}
     <div className="flex items-center my-7 bg-gray-200 w-fit  md:ml-10 ml-2 rounded-full">
        <input type="text" ref={inputRef} placeholder="Add your Task" className="bg-transparent border-0 outline-none  pl-3 placeholder:text-slate-600"/>
        <button  onClick={add} className=" cursor-pointer bg-orange-600 px-4 py-3 text-white rounded-full border-none md:text-lg text-xs font-medium whitespace-nowrap">        ADD  +

        
        </button>
     </div>

     {/* ---- todo list----- */}

     <div>
     {todolist.map((item,index)=>{
        return <TodoItmes key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
     })}
        {/* <TodoItmes text="Learning coding"/>
        <TodoItmes text="Learning coding"/> */}
     </div>
    </div>
  )
}

export default Todo
