import moment from "moment"
import { useEffect } from "react"
import { useState } from "react"
import buildCalendar from "./build.js"
import dayStyles from "./styles.js"

const Calendar = () => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment()) 

     useEffect(() => {
    setCalendar(buildCalendar(value))
    }, [value])

function currMonthName() {
    return value.format("MMMM")
}
function currYeear() {
    return value.format("YYYY")
}
function prevMonth() {
    return value.clone().subtract(1, "month")
}
function nextMonth() {
    return value.clone().add(1, "month")
}

    return (
        <div className="calendar">
            <div className="headerCalendar">
                <div className="previous" onClick={()=> setValue(prevMonth)}>{String.fromCharCode(171)}</div>
                <div className="current">{currMonthName()} {currYeear()}</div>
                <div className="next" onClick={()=>setValue(nextMonth)}>{String.fromCharCode(187)}</div>
            </div>
       <div className="bodyCalendar">
           <div className="weekDaysName">
               {
                   ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(d=> <div className="week">{d}</div>)
               }
           </div>
       {calendar.map(week => <div>
                {
                    week.map(day=> <div className="day" onClick={()=>setValue(day)}>
                      <div className={dayStyles(day, value)}
                      >  {day.format("D").toString()} </div>
                    </div> )
                }
            </div>)
            }
       </div>
            </div>
    )
}
export default Calendar