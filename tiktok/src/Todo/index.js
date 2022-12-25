
import { useReducer, useRef } from "react"
import {FuncAddJob, FuncSetJob, FuncDeleteJob} from "./actions"
import reducer,{initialState}  from "./reducer"

function UseReducerTodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { job, listJobs } = state
    const jobInput = useRef()
    console.log(listJobs)
    const HandleSubmit = () =>{
        dispatch(FuncAddJob(job))
        dispatch(FuncSetJob(''))
        jobInput.current.focus()
    }
    return (
        <div style={{ padding: '0 20px' }}>
            <h3>ToDo</h3>
            <input value={job} onChange={(e) => dispatch(FuncSetJob(e.target.value))} ref={jobInput} />
            <button onClick={HandleSubmit}>Add</button>
            <ul>
                {
                    listJobs.map((item, index) =>{
                        return (
                            <li key={index}>{item} <span onClick={()=>dispatch(FuncDeleteJob(index))}>X</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default UseReducerTodoApp