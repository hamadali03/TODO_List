import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItmes = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center  cursor-pointer">
<img src={isComplete?tick:not_tick} alt="" className="w-6"/>
<p className={`text-slate-700 ml-4 text-[17px] ${isComplete?"line-through":""}`} onClick={()=>toggle(id)}>{text}</p>
      </div>
      <img src={delete_icon} onClick={()=>deleteTodo(id)} alt="" className="w-3.5 cursor-pointer"/>
    </div>
  )
}

export default TodoItmes
