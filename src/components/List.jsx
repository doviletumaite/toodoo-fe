import { useDispatch } from "react-redux"
import { setListCard } from "../redux/actions"
import "../style/ProfilePage.css"

const List = ({list: l}) => {
    const dispatch = useDispatch()
    const setList = (list) => {
        dispatch(setListCard(list))
        console.log("lsit in list component",list)
    }
    return ( 
        
            <div className="calendarLabel" onClick={()=>setList(l)}>{l.title} </div>
       
    )
}
export default List