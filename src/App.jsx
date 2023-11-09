import { useEffect, useState } from "react"
import ListComponent from "./ListComponent"

function App() {
  const [ inputValue, setInputValue ] = useState("")
  const [ todos, setTodos ] = useState([])
  
  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, inputValue]);
    localStorage.setItem("todos", JSON.stringify([...todos, inputValue]) )
    setInputValue("")
  }

  const removeTodo = (index) => {
    const t = [...todos]
    t.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(t) )
    setTodos(t)
  }

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("todos")) !== null)
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[])


  return (
    <>
      <div>
        <input value={inputValue} onChange={handleInputValue} placeholder="Enter your todo"/>
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ol>
        { todos?.map((todo, i)=>( <ListComponent key={i} index={i} name={todo} removeTodo={removeTodo}/>)) }
      </ol>
    </>
  )
}

export default App
