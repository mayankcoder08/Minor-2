import React from 'react'

function HomeSection(){
    return (
        <main>
            <section style={{backgroundImage:"../src/image/HomeSecImg.png"}}>
                <h3>Welcome to LineUp</h3>
                <h1>ARE YOU A <span class="changecontent"></span></h1>
                <p>"Manage all your Task here"</p>
                <div class="btn">
                <button style={{backgroundColor:'#f5ba13'}}>
                    Log in
                </button>
                <button style={{backgroundColor:'#f5ba13'}}>Register</button>
                </div>
            </section>
        </main>
    )
}

export default HomeSection;