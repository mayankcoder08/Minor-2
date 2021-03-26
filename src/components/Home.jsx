import React from "react"
import HomeSection from "./HomeSection";
import Navbar from './Navbar'
import Footer from './Footer'
import Login from "./Login";

function Home(){
    return(
        <div>
            <Navbar />
            <HomeSection/>
            <Login />
            <Footer />
        </div>
    )
}

export default Home;