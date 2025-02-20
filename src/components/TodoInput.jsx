import React, { useState } from 'react'

export default function TodoInput(props) {
  const { AddTodo, setTodoValue, todoValue } = props


  return (
    <header style={{marginTop: "30px"}}>
        <input style={{ 
   
   padding: "10px 15px", 
   borderRadius: "5px", 
   border: "1px solid #ccc", 
   width: "250px", 
   height: "30px", 
   marginLeft:"2px",
   marginRight: "10px" }}

  value={todoValue} onChange={(e)=>{
            setTodoValue(e.target.value)
            }} type="text" placeholder='Type your todo here..' />
        <button style={{ 
    padding: "10px 15px", 
    backgroundColor: "#6b5b95", 
    color: "white", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer",
    transition: "0.3s"
  }}  onClick={()=>{
                AddTodo(todoValue)
                setTodoValue('')
        }}>Add</button>
    </header>
  )
}
