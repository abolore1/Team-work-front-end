import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(){
    return(
         <div>
             <h1>TodoList</h1>
             <Link style={linkStyle} to="/" >Home</Link> | <Link style={linkStyle} to="/about">About</Link>
         </div>
    )
}

const linkStyle ={
    color:"#fff",
    textDecoration:"none",
    
}
