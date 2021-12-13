import { useDispatch } from "react-redux"
import { deleteList, setListCard } from "../redux/actions"
import "../style/ProfilePage.css"
import del from "../style/images/delete.png"

const List = ({list: l}) => {
    const dispatch = useDispatch()
    const setList = (list) => {
        dispatch(setListCard(list))
        console.log("lsit in list component",list)
    }
    const handleDeleteList = (id) => {
         dispatch(deleteList(id))
    }

    return ( 
        <div className="listLabeWrapper">
            <div className="calendarLabel" onClick={()=>setList(l)}>{l.title} 
            </div> <img src={del} className="deleteIcon" onClick={()=>handleDeleteList(l._id)}/>
       </div>
    )
}
export default List