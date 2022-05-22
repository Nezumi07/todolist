import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")


  // preventDefault stops the form from refreshing

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    
    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    
    setTodos(updatedTodos)
  }


  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/
        >
        <button className="todoEntry" type="submit">Add Todo Entry</button>
      </form>
      {todos.map((todo) => <div key={todo.id}>
        <div>{todo.text} </div>
        <button className="buttonColor" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <input type="checkbox" onChange={() => toggleComplete(todo.id)}
        checked={todo.completed}/>
    </div>)}
    </div>
    )
}

export default App;
