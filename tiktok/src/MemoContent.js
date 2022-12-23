import React from "react"

const MemoTemp = React.memo(
    function MemoContent(props) {
        console.log("call me")
        return (
            <div>MemoContent {JSON.stringify(props)}</div>
        )
    })

export { MemoTemp }