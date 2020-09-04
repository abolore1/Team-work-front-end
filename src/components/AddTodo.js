import React from 'react';

class AddTodo extends React.Component {
   state = {
      title:''
   }

   onSubmit =(e)=>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''}); //clearing the textfield after submit
   }

   //grabbing the input field value
   onChange =(e)=>this.setState({[e.target.name]:e.target.value});
   
   render(){
       return (
          <form  onSubmit={this.onSubmit}
           style={{display:"flex",
                 margin:'10px',
                 width:"auto"}}>
              <input type="text"
                 name="title"
                 style={{flex:"10",
                 padding:'8px',
                 width:600,
                 marginRight:'15px',
                 borderRadius:'10px'}}
                 placeholder="Add Todo..."
                 value={this.state.title}
                 onChange={this.onChange}
               />
              <input type="submit" 
                 value="Add"
                 className="btn"
                 style={{background:'green',
                 color:'white',
                 fontFamily:"Roboto",
                 fontWeight:"bolder",
                 borderRadius:'10px',
                 width:"80px"
               }} 
              />
          </form> 
       )
   }
}

export default AddTodo;