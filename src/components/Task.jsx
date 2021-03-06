import del from "../style/images/delete.png";
import { useSelector, useDispatch } from "react-redux"
import {deleteTask, edidTask, setTaskDone} from "../redux/actions"
import { useState } from "react";

const Task = ({task:t}) => {
    const cardState = useSelector(s=> s.list.selectedList)
    const listState = useSelector(s=> s.list)
    const dispatch = useDispatch()
    const handleDeleteTask = (t) =>{
           console.log("id list",cardState._id )
           dispatch(deleteTask(cardState._id, t))
    }
    const [check, setCheck] = useState(false)
    const checkValueTAsk = (id) => {
        setCheck(!check)
        // dispatch(setTaskDone(!check))
         dispatch(edidTask(cardState._id, id, {task:check}))
      }
    return (

<div className="checkLine">
          <img src={del} onClick={()=>handleDeleteTask(t._id)} className="deleteIcon"/>
          <input className="checkbox" type="checkbox" 
          value={check} 
          onChange={()=>checkValueTAsk(t._id) } 
          />
          <label className="label">{t.task}</label>
          </div>

    )
}
export default Task 