import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  
  function presistData(newList){
    localStorage.setItem('todos',JSON.stringify({
      todos: newList
    }))

  }
  
  function AddTodo (newTodos){
    const newTodoList = [...todos, newTodos]
    presistData(newTodoList)
    setTodos(newTodoList)
  }

  function DeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    presistData(newTodoList)
    setTodos(newTodoList)

  }

  function EditTodo(index){
    const EditedValue = todos[index]
    setTodoValue(EditedValue)
    DeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodo= localStorage.getItem('todos')
    if(!localTodo){
      return
    }
    localTodo = JSON.parse(localTodo).todos
    setTodos(localTodo)

  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} AddTodo={AddTodo} />
      <TodoList  DeleteTodo={DeleteTodo} EditTodo={EditTodo} todos={todos} />
    </>
  )
}

export default App
