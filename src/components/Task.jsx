import del from "../style/images/delete.png";
import { useSelector, useDispatch } from "react-redux"
import {deleteTask} from "../redux/actions"

const Task = ({task:t}) => {
    console.log("t",t)
    const cardState = useSelector(s=> s.list.selectedList)
    const dispatch = useDispatch()
    const handleDeleteTask = (t) =>{
           console.log(t)
           console.log("id list",cardState._id )
           dispatch(deleteTask(cardState._id, t))
    }

    return (

<div className="checkLine">
          <img src={del} onClick={()=>handleDeleteTask(t._id)} className="deleteIcon"/>
          <input className="checkbox" type="checkbox"/>
          <label className="label">{t.task}</label>
          </div>

    )
}
export default Task 