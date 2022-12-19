import { useState } from "react";

function UseStateRandomGift() {
    const Gifts = [
        "CPU 12",
        "Ram 32",
        "Ram 64"
    ]

    const [state, setstate] = useState();
    
    const HandleRandomGift = () => {
        while(true){
            
        }
        let gift = Math.floor(Math.random() * Gifts.length)
        setstate(Gifts[gift])
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>{state || "Chua co phan thuong"}</h2>
            <button onClick={HandleRandomGift}>Get Gift</button>
        </div>
    )
}

export default UseStateRandomGift