
import {ACTION_SET_JOB, ACTION_ADD_JOB, ACTION_DELETE_JOB} from "./constants"
// Action
export const FuncSetJob = (payLoad) => {
    return {
        type: ACTION_SET_JOB,
        payLoad
    }
}

export const FuncAddJob = (payLoad) => {
    return {
        type: ACTION_ADD_JOB,
        payLoad
    }
}

export const FuncDeleteJob = (payLoad) =>{
    return{
        type: ACTION_DELETE_JOB,
        payLoad
    }
}