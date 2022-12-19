import { useState } from "react";



function TodoList() {
    const [job, setJob] = useState()
    const [listJobs, setListJob] = useState([])

    const HandleAddJob = () => {
        // setListJob([...listJobs,job])
        // setListJob(
        //     (pre)=>{
        //     return (
        //         [
        //             ...listJobs,
        //             job
        //         ]
        //     )
        // })
        setListJob(
            (pre) => [
                ...pre,
                job
            ]
        )
        setJob('')
    }

    return (
        <div style={{ padding: 20 }}>
            <input onChange={(e) => setJob(e.target.value)} value={job} />
            <button onClick={HandleAddJob}>Add</button>
            <ul>
                {
                    listJobs.map((item, index) => {
                        return (
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default TodoList