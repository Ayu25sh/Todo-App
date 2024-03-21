import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

function App() {
  const [todos,setTodos] = useState([]);

  useEffect( () => {
    fetch("http://localhost:4000/api/v1/get-todo")
      .then(async (res) => {
        const response = await res.json();
        setTodos(response.allTodo);
    })
  },[todos]);
  

  return (
    <>
      <CreateTodo />
      <Todos todos = {todos} />
    </>
  )
}
 
export default App
