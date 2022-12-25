import {ACTION_ADD_JOB, ACTION_SET_JOB, ACTION_DELETE_JOB} from "./constants"

// Initial state
export const initialState = {
    job: '',
    listJobs: []
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

export default reducer
