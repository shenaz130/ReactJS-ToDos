import React from 'react'

export default function TodoCard(props) {
  const { children, DeleteTodo, index, EditTodo } = props

  return (
     <li  style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px", 
      borderBottom: "1px solid #ddd"}} className="todoItem" >
        {children}
        <div className="Container">
          <button style={{ background: "#034f84", color: "white", padding: "5px 10px", border: "none", cursor: "pointer", marginRight:"15px", marginLeft:"15px" }}  onClick={()=>{ 
              EditTodo(index)
          }}>
              <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button style={{ background: "#d64161", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}  onClick={()=>{ 
              DeleteTodo(index)
          }}>
              <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>

  )
}
