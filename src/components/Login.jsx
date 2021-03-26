import React from 'react'

import "./Login.css"

function Login(){
    return(
        <React.Fragment>
        <div className='main-div' id='log-reg'>
        <div className='login-box'>

               <form>
               <input type='text' placeholder='mail' className='input-group' required></input>
               <input type='password' placeholder='password' className='input-group' required></input>
               <br></br>
               <input type='checkbox' className='checkbox-class'></input>
               <label>Remember Me</label>
               </form>
               <div id='log-btn'>
                <button type='button' className='btn-log'>LOGIN</button>
                </div>
                
              
           </div>
           <div className='login-box'>
              
               <form>
               <input type='text' placeholder='first name' className='input-group' required></input>
               <input type='text' placeholder='second name' className='input-group' required></input>
               <input type='text' placeholder='mail' className='input-group' required></input>
               <input type='password' placeholder='password' className='input-group' required></input>
               <input type='password' placeholder='confirm password' className='input-group' requied />
               </form>
               <div id='log-btn'>
                <button type='button' className='btn-log'>REGISTER</button>
                </div>
              
           </div>
        </div>
          
        </React.Fragment>
    )
}

export default Login;