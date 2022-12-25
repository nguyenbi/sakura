import {ThemeContext} from "./index"
import { useContext } from "react"

function Paragrap(){
    const {theme,...rest} = useContext(ThemeContext)
    return (
<div className={theme}>
Day la doan van ban
</div>

    )
}

export default Paragrap