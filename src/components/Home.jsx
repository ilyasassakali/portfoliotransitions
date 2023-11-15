import React from "react";
import "../styles/Home.css"
import imageilyas from "../images/ilyasassakali.jpg"

function Home() {
    return ( 
    
        <div className="mainContainer">
            <img src={imageilyas} alt="" />
            <h1>Ilyas Assakali</h1>
            <p>I'm a Full Stack Developer</p>

            <div class="social-media">           
            <ul>
                    <li><a href="https://www.linkedin.com/in/ilyas-assakali-69396a143/"><i class="fab fa-linkedin"></i></a></li> 
                    <li><a href="https://github.com/ilyasassakali"><i class="fab fa-github"></i></a></li> 
                    <li><a href="mailto:ilyas.assakali@hotmail.com"><i class="fa fa-envelope"></i></a></li> 
            </ul>
            </div>
        </div> 
   
    );
}

export default Home;