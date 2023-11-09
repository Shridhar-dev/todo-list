import { useState } from "react"

export default function ListComponent({name, index, removeTodo}) {
    const [color, setColor] = useState("red")
    

    return (
        <li onMouseEnter={()=>setColor("blue")} onMouseLeave={()=>setColor("red")} style={{background:color}}>
            <div>
                <p>{name}</p>
            </div>
            <button onClick={()=>removeTodo(index)} >X</button>
        </li>
    )
}