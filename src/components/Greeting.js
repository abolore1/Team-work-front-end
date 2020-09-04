import React from 'react'

class Greeting extends React.Component{
  
  render(){ 
  const date = new Date();
  const hours = date.getHours();
  const myDate = date.toDateString()
  const timeDisplay = date.toTimeString()

  let timeofdDay;
  if (hours<12) {
    timeofdDay ="morning "
    //css.color="Whitesmoke"
  } 
  else if(hours >=12 && hours<17) {
    timeofdDay =" afternoon "
    }
  else  {
    timeofdDay ="evening "
  }
	  
	  return(
    <React.Fragment>
         <h3 style={css}>Good {timeofdDay }!...{myDate}</h3>  
         <h4>{timeDisplay}</h4> 
    </React.Fragment>
      
   )
   
   }
   
  }

 
const css ={
  color:"white",
  fontSize:"15px",
  fontFamily:"arial",
 
}
export default Greeting