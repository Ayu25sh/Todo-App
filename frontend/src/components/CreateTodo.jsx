import React from 'react'
import{ useState } from 'react'

export default function CreateTodo() {
    //react-query
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

  return (
    <div>
         

        <button onClick = { () => {
            fetch("http://localhost:4000/api/v1/create-todo", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
               .then(async (res) => {
                    const response = await res.json();
                    alert("Todo added");
                })

        }} >Add a todo</button>
    </div>
  )
}
