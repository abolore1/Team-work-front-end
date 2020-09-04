import React, { Component } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import TodoItem from "./components/TodoItem";
import Header from './components/Header';
import  AddTodo from './components/AddTodo';
import  About from './components/pages/About';
import Greeting from './components/Greeting';
import axios from 'axios';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos:[]
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>this.setState({todos:res.data}))
  }
 
  // creating a method to set new state(setState)
  handleChange=(id)=> {
    //  prevState is func. in the  setState method  to knw of previous stage of the todos state above
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        //since the method received id parameter
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
       
        //returning map
        return todo;
      });
      //setState returning the new updatedTodo
      return { todos: updatedTodos };
    });
  }
  //Deleting 
  delTodo=(id)=>{
	const{todos}= this.state  
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({
		todos:[...todos.filter(todo=>todo.id!==id)]
		}))
  }

  //Add Todo
  addTodo =(title )=>{
	  const{todos}= this.state
	  axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
     })
     .then(res=>this.setState({todos:[...todos,res.data]}))

  }
  render() {
	  const{todos}=this.state
    //mapping the state into myNewTodo and rendering it. 
    const myNewTodo = todos.map(item =>(
      <TodoItem item={item} key={item.id}
       handleChange={this.handleChange} 
       delTodo={this.delTodo} />
    ));
    
    return(
       <Router >
	    <div className="todo-list"> 
            <div className="header">
            <Greeting/>
             <Header />
            
             <Route exact path="/" render={props =>(
               <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
             </React.Fragment> )}/> 
            </div>
          
                 {/* here */}
                 {myNewTodo} 
            <Route path="/about" component={About} />
          </div>
       </Router>
     )
  }

}

export default App;
