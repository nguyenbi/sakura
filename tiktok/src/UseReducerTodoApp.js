
import { useReducer, useRef } from "react"

// Initial state
const initialState = {
    job: '',
    listJobs: []
}

// Action
const ACTION_SET_JOB = "setjob"
const ACTION_ADD_JOB = "addjob"
const ACTION_DELETE_JOB = "Deletejob"

const FuncSetJob = (payLoad) => {
    return {
        type: ACTION_SET_JOB,
        payLoad
    }
}

const FuncAddJob = (payLoad) => {
    return {
        type: ACTION_ADD_JOB,
        payLoad
    }
}

const FuncDeleteJob = (payLoad) => {
    return {
        type: ACTION_DELETE_JOB,
        payLoad
    }
}

// Reducer action
const reducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case ACTION_SET_JOB:
            newState = {
                ...state,
                job: action.payLoad
            }
            break;
        case ACTION_ADD_JOB:
            newState = {
                ...state,
                listJobs: [
                    ...state.listJobs,
                    action.payLoad
                ]
            }
            break;

        case ACTION_DELETE_JOB:
            newState = {
                ...state,
                listJobs: state.listJobs.filter((item, index) => index != action.payLoad)
            }
            break

        default:
            break;
    }
    return newState
}

function UseReducerTodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { job, listJobs } = state
    const jobInput = useRef()
    console.log(listJobs)
    const HandleSubmit = () => {
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
                    listJobs.map((item, index) => {
                        return (
                            <li key={index}>{item} <span onClick={() => dispatch(FuncDeleteJob(index))}>X</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default UseReducerTodoApp