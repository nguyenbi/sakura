import { useReducer } from "react"

// Initial state
const initialVal = 0

// Actions
const ACTION_UP = "UP"
const ACTION_DOWN = "DOWN"

// Reducer action

const reducer = (state, action) => {
    switch (action) {
        case ACTION_UP:
            return state + 1
            break;
        case ACTION_DOWN:
            return state - 1
            break
        default:
            throw new Error("Not valid")
            break;
    }
}

function UseReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialVal)

    return (
        <div style={{ padding: 20 }}>
            <label>{state}</label>
            <br></br><button onClick={() => dispatch(ACTION_UP)}>Up</button>
            <button onClick={() => dispatch(ACTION_DOWN)}>Down</button>
        </div>
    )
}

export default UseReducerDemo