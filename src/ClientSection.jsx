import React,{useState} from "react";
import client1 from "./assets/images/client-1.png"
import client2 from "./assets/images/client-2.png"
import client3 from "./assets/images/client-3.png"
import client4 from "./assets/images/client-4.png"

function ClientSection(){
    const[data,setdata]=useState([
        {
            image: client1
        },
        {
            image: client2
        },
        {
            image: client3
        },
        {
            image: client4
        }
    ])
    return(
        <section className="cilent_img">
            <div className="container">
        <div className="row text-center">
             {data.map((user)=>{
                 return(
                    <div className="col-md-3">
                        <img src={user.image}/>
                     </div>   
                 )
             })}
        </div>
            </div>
        </section>
    )
}
export default ClientSection