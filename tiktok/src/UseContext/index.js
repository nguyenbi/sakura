import { useState, createContext } from "react"

import Content from "./content"

import "../App.css"

export const ThemeContext = createContext()

function UseContextDemo() {
    const [state, setstate] = useState('dark');
    return (
        <ThemeContext.Provider value={
            {
                theme: state,
                note: 'Khong co'
            }
        }>
            <div>
                <button onClick={() => setstate(state == 'dark' ? 'light' : 'dark')}>Toggle class</button>
                <Content/>
            </div>
        </ThemeContext.Provider>

    )
}

export default UseContextDemo