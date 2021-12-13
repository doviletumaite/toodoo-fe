import del from "../style/images/delete.png";
import { useSelector, useDispatch } from "react-redux"
import {deleteTask, edidTask} from "../redux/actions"
import { useState } from "react";

const Task = ({task:t}) => {
    console.log("t",t)
    const cardState = useSelector(s=> s.list.selectedList)
    const dispatch = useDispatch()
    const handleDeleteTask = (t) =>{
           console.log(t)
           console.log("id list",cardState._id )
           dispatch(deleteTask(cardState._id, t))
    }
    const [check, setCheck] = useState(false)
    const checkValueTAsk = (e) => {
        setCheck(!check)
        console.log(check)
      }
      const editTask = (taskID) => {
         dispatch(edidTask(cardState._id,taskID, check ))
         console.log("elements dispatched",cardState._id,taskID, check )
      }
    return (

<div className="checkLine">
          <img src={del} onClick={()=>handleDeleteTask(t._id)} className="deleteIcon"/>
          <input className="checkbox" type="checkbox" 
          value={check} 
          onChange={(e)=>checkValueTAsk(e) } 
          onClick={()=>editTask(t._id)}
          />
          <label className="label">{t.task}</label>
          </div>

    )
}
export default Task 