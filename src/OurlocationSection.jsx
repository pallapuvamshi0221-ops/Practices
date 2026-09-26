import React from "react";
import Locationimg from "./Locationimg";
import LocationForm from "./LocationForm";

function OurlocationSection(){
    return(
        <section className="location_bg">
        <div className="container py-5">
            <div className="row">
        <div className="col-md-4">
            <Locationimg/>
        </div>
        <div className="col-md-8 ">
             <LocationForm/>
        </div>
        </div>
        </div>
        </section>
    )
}
export default OurlocationSection