import React,{useState} from "react";

import project1 from "./assets/images/ProjectImg1.jpeg.jpg"
import project3 from "./assets/images/ProjectImg3.jpeg.jpg"
import project4 from "./assets/images/ProjectImg4.jpeg.jpg"
import project5 from "./assets/images/ProjectImg5.jpeg.jpg"
import project6 from "./assets/images/ProjectImg6.jpeg.jpg"
import project2 from "./assets/images/ProjectImg3.jpeg.jpg"

function Projectimg(){
    const[data,setdata]=useState([
        {
            image:project1   
        },
        {
            image:project3
        },
        {
            image:project4
        },
        {
            image:project5
        },
        {
            image:project6
        },
        {
            image:project2
        }
    ])
return(
    <section className="ourproject">
        <div className="container">
    <div className="row">
        {data.map((user)=>{
            return(
                <div className="col-md-4">
                    <img src={user.image} className="img-fluid"/>
                </div>
            )
        })}
    </div>
    </div>
    </section>
)
}
export default Projectimg