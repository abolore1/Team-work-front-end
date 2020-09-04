import React from "react";

function TodoItem(props) {

  return (
    <div className="todo-item">
       <div className="testing">
         <input
         type="checkbox"
         checked={props.item.completed}
         onChange={()=>props.handleChange(props.item.id)}
        />
         <h3 style={props.item.completed?completedStyles:null}>{props.item.title}</h3> 
     </div>
       <div> <button onClick={()=>props.delTodo(props.item.id)} className="btnStyle" >x</button></div>
    </div>
  );
}

const completedStyles ={
  color:"#cdcdcd",
  textDecoration:"line-Through",
  fontStyle:"italic",
  
} 

export default TodoItem;
