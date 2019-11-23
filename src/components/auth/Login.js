 import React from "react";

 const Login = () => {
     return(
         <div>
             <h2>Sign in</h2>
             <p >Sign into your account</p>
             <form>
                 <div>
                     <input type='email' placeholder='Email id' name='email'/> <br/> <br/>
                     <input type="password" placeholder="password" name="password"/><br/> <br/>
                     <button value="submit">Submit</button>
                 </div>
             </form>
             
         </div>
     );
 }

 export default Login;