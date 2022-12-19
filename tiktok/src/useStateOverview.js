import { useState } from "react"

// Component được re-render sau khi set state
function AppUseState() {
    const TotalArr = [100, 200, 300]
    // Initial state với callback
    const [state, setstate] = useState(() => TotalArr.reduce((total, cur) => total + cur));
    const HandleIncrease = () => {
        setstate(Increase(state))
        setstate((state) => {
            return (state + 1)
        })
        setstate(state => state + 1)
    }

    const Increase = (pre) => {
        return (pre + 1)
    }

    let objectSinhVien = {
        name: "Nguyen Bi",
        age: "18 tuoi"
    }
    const [sinhVien, setsinhVien] = useState(objectSinhVien);

    // Set state la thay the toanf booj state cur bawngf gias trij mowis
    const UpdateSV = () => {
        setsinhVien(
            (param) => {
                return (
                    {
                        ...param,
                        sex: "Nam"
                    }
                )
            }
        )
    }

    // TWO_WAY BINDING
   const [Ten, setTen] = useState();
const HandleReset = () =>{
    setTen("Nguyen Bi")
}

// FORM
const [userName, setuserName] = useState();
const [password, setpassword] = useState();

const SubmitForm = () =>{
    
}
    return (
        <div>
            <h2>{state}</h2>
            <h3>Sinh vien</h3>
            <h4>{JSON.stringify(sinhVien)}</h4>
            <button onClick={UpdateSV}>Update sinh vien</button>
            <button onClick={HandleIncrease}>Increase</button>

            <div>Two-way binding</div>
            <label>Nhập tên</label>
            <input type="text" value={Ten} onChange={(e) => {
                setTen( e.target.value) }}/>
            <label>Tên vừa nhập : {Ten}</label>
            <br></br>
            <button onClick={HandleReset}>Reset Ten</button>

            <p></p>

            <form>
                <input type="text" placeholder="Nhập username" onChange={(e) => {
                    setuserName(e.target.value)
                }} />
                <input type="password" placeholder="Nhập password" onChange={(e) => {
                    setpassword(e.target.value)
                }} />
<button onClick={SubmitForm} type="button">Submit</button>
<p>Giá trị bạn vừa nhập: <br></br>Username: {userName}<br></br>Password: {password}</p>
            </form>
        </div>
    )
}

export default AppUseState