const Task = ({task:t}) => {
    console.log("t",t)
    
    return (

<div className="checkLine">
          <input className="checkbox" type="checkbox"/>
          <label className="label">{t.task}</label>
          </div>

    )
}
export default Task 