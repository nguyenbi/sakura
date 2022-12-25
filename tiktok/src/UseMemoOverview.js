
import { useState, useMemo, useRef } from "react"

function UseMemoDemo() {
    const [userName, setuserName] = useState('');
    const [price, setprice] = useState('');
    const [listUsers, setlistUsers] = useState([]);
    var userNameInput = useRef();
    const AddItem = () => {
        setlistUsers(
            (preState) => {
                return (
                    [...preState, {
                        name: userName,
                        giaCa: +price
                    }]
                )
            },
            setuserName(''),
            setprice(''),
            userNameInput.current.focus()
        )
    }

    const giaCaTong = useMemo(
        () => {
            return listUsers.reduce((total, item) => total + item.giaCa, 0)
        },
        [listUsers]
    )

    return (
        <div style={{ padding: 20 }}>
            <input placeholder="Enter username" ref={userNameInput} value={userName} onChange={(e) => setuserName(e.target.value)} /><br />
            <input placeholder="Enter price" value={price} onChange={(e) => setprice(e.target.value)} /><br></br>
            <button onClick={AddItem}>Add</button>
            <div>
                Total: {giaCaTong}
                <ul>
                    {
                        listUsers.map((item, index) => {
                            return (<li key={index}>{item.name} - {item.giaCa}</li>)
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default UseMemoDemo