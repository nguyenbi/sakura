import React from "react"

function Content({onIncrease}) {
    console.log('re-render')
    return (
        <React.Fragment>
            <div>Hello anh em F8</div>
            <div>Toi la toi</div>
            <button onClick={onIncrease}>Increase</button>
        </React.Fragment>
    )
}

export default React.memo(Content)