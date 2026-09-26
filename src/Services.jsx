import React,{useState} from "react";
import service1 from "./assets/images/service-1.png"
import service2 from "./assets/images/service-2.png"
import service3 from "./assets/images/service-3.png"
import service4 from "./assets/images/service-4.png"

function Services(){
    const[data,setdata]=useState([
        {
            image:service1,
            tittle:"Engine Repairs",
            desc:"Reliable engine repair and maintenance for the home and application  services."
        },
        {
            image:service2,
            tittle:"Electrical Services",
            desc:"installation/solutions for and complimented adding the home."
        },
         {
            image:service3,
            tittle:"Plumbing Servicess",
            desc:"Fast and dependable plumbing solutions manifacturing  for home."
        },
         {
            image:service4,
            tittle:"House Repair & Remodeling",
            desc:"Complete home repair and remodeling services."
        },
    ])

return(
    <>
    <div className="row">
        {data.map((user)=>{
            return(
                <div className="col-md-3">
                    <div className="border-line">
                    <img src={user.image}/>
                    <h4>{user.tittle}</h4>
                    <p>{user.desc}</p>
                    </div>
                 </div>
            )
        })}
    </div>
    </>
)
}
export default Services