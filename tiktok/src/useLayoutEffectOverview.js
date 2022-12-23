import { useState, useLayoutEffect } from "react";

function UseLayoutEffectDemo() {
    const [state, setstate] = useState(0);
    useLayoutEffect(() => {
        console.log(state)
        if (state > 3) {
            setstate(0)
        }
        return () => {
        };
    }, [state]);

    const HandleCounter = () => {
        setstate(state + 1)
    }
    return (
        <div>
            <div>Đồng hồ</div>
            <div>{state}</div>
            <button onClick={HandleCounter}>Đếm tôi</button>
        </div>
    )
}

export default UseLayoutEffectDemo