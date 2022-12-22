import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "Html, Css"
    },
    {
        id: 2,
        name: "Java co ban"
    },
    {
        id: 3,
        name: "Php nang cap"
    }
]


function CreateRadio() {
    const [state, setstate] = useState(2);

    const HandleSubmit = () =>{
        console.log({id: state})
    }
    return (
        <div style={{ padding: 20 }}>
            {
                courses.map(
                    (item, index) => {
                        return (
                            <li key={index}>
                                
                                <label><input type="radio" onChange={() => setstate(item.id)} checked={state === item.id}/> {item.name}</label>
                            </li>
                        )
                    }
                )
            }
            <button onClick={HandleSubmit}>Register</button>
        </div>
    )
}

export default CreateRadio