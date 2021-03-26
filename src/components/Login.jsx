import React from 'react'


function Login(){
    return(
        <div className='form-main'>
            <button type="button" class="toggle-btn">Login</button>
            <button type="button" class="toggle-btn">Register </button>
            <form className='form-box'>
                <input type='text' placeholder='enter text'/>
                <input type='text' placeholder='enter password' />
                {/* <input type="checkbox" class="check-box">Remember Me</input> */}
                <button type="submit" class="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default Login;