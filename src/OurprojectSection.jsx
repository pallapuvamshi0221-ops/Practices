import React from "react";
import ProjectHeader from "./ProjectHeader";
import Projectimg from "./Projectimg";
function OurprojectsSection(){
    return(
        <>
        <div className="container">
        <div>
            <ProjectHeader/>
        </div>
        <div>
            <Projectimg/>
        </div>
        </div>
        </>
    )
}
export default OurprojectsSection