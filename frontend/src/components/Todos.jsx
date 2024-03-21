import React from 'react'

export default function Todos({todos}) {
  console.log(todos);
  return (
    <div>
      {
        todos.map( (todo) => {
          return (<div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed == true ? " Completed " : "Mark as complete"}</button>
          </div>)
        })
      }
    </div>
  )
}
