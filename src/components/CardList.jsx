import { useSelector } from "react-redux";
import Task from "./Task";

const CardList = ({stateListCard}) => {
    console.log("stateListCard",stateListCard)
    const date = new Date()
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const today = dd + '/' + mm + '/' + yyyy;
    const tasks = useSelector(s=> s.list.tasks)
    console.log("tasks", tasks)
 return (
    
          <div className="listSession">
                <div className="dailyList">
                <p className="list-Title">{stateListCard.title}</p>
                  <div className="list">
                  <p className="date">today's date: {today}</p>   
                <p className="dailyGoals">my daily goals:</p>

                     <div className="inputs-list">
                <input type="text" placeholder="add some tasks!"/>
                    </div>
                     
                     <div className="checkList">
                    <div className="checks">
              { stateListCard.tasks ?
               (stateListCard.tasks.length>= 1 ) ? 
              stateListCard.tasks.map(t=> <Task task={t}/>)
              : ( <> 
                <input className="checkbox" type="checkbox"/>
                <label className="label">{stateListCard.tasks.task}</label>
                </>): (<></>)}
                     </div>
                     </div>
                  </div>
                </div>
                <div className="calendar"></div>
                </div>
    
 )
}
export default CardList