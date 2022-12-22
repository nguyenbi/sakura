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


function CreateCheckbox() {
    const [state, setstate] = useState(2);

    const [lstChecked, setlstChecked] = useState([]);

    const SetList = (idParam) => {
        var checked = lstChecked.includes(idParam)
        if (checked) {
           let lstTemp = lstChecked.filter(id => id != idParam)
           setlstChecked(
            [...lstTemp]
           )
        } else {
            // setlstChecked(
            //     [...lstChecked, idParam]
            // )
            setlstChecked(
                (pre) => {
                    return (
                        [...pre, idParam]
                    )
                }
            )
        }
    }
    const HandleSubmit = () => {
        console.log(lstChecked)
    }
    return (
        <div style={{ padding: 20 }}>
            {
                courses.map(
                    (item, index) => {
                        return (
                            <li key={index}>

                                <label><input type="checkbox" onChange={() => SetList(item.id)} checked={lstChecked.includes(item.id)} /> {item.name}</label>
                            </li>
                        )
                    }
                )
            }
            <button onClick={HandleSubmit}>Register</button>
        </div>
    )
}

export default CreateCheckbox