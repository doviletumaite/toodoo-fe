import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask, postNewTask, setListCard } from "../redux/actions";
import Task from "./Task";
import del from "../style/images/delete.png";

const CardList = () => {
    const dispatch = useDispatch()
    const date = new Date()
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const today = dd + '/' + mm + '/' + yyyy;

    const tasks = useSelector(s=> s.list.tasks)
    const cardState = useSelector(s=> s.list.selectedList)
    const userState = useSelector(s=> s.userInfo)
    const listState = useSelector(s => s.list.lists)
    const [newTask, setNewTask] = useState("")
    const handleNewTask = (e) => {
      setNewTask(e.target.value)
    }

    const addTask = () => {
      if(newTask===""){
        alert("add some task :)")
      } else {
           dispatch(postNewTask(cardState._id, newTask))
          console.log("card state resetted", cardState)
      }
    }

    const handleDeleteTask = (t) =>{
      console.log(t)
      console.log("id list",cardState._id )
      dispatch(deleteTask(cardState._id, t ))
}


console.log(listState)

const checkValueTAsk = () => {

}
 
    return (
    
      
          <div className="listSession">
                <div className="dailyList">
             { listState.length>=1 ?  ( <p className="list-Title">{cardState.title}</p>) : (<p className="list-Title"></p>) }
                  <div className="list">
                  <p className="date">today's date: {today}</p>   
                <p className="dailyGoals">my daily goals:</p>

                     <div className="inputs-list">
                <input type="text" placeholder="add some tasks!" value={newTask} onChange={handleNewTask}/>
                <button className="addTaskButton" onClick={addTask}>add</button>
               
                    </div>
                     
              { listState ?        <div className="checkList">
                  <div className="checks">
                
              { (Object.keys(cardState.tasks).length>= 1 ) ? 
               cardState.tasks.map(t=> <Task task={t}/>)
              : 
              cardState.tasks.length=== 0 ? (<></>) :
           (  
              <>
                <img src={del} className="deleteIcon" onClick={()=>handleDeleteTask(cardState.tasks._id)} /> 
                <input className="checkbox" onClick={(e)=>checkValueTAsk()} type="checkbox"/>
                <label className="label">{cardState.tasks.task}</label>
                </>

                )  }
               
                     </div>
                     </div>  :(<></>) }
                  </div>
                </div>
                </div>
              
    
 )
}
export default CardList