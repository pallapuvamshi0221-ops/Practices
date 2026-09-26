import React from "react";
import HousingContent from "./HousingContent";
import Housingimg from "./Housingimg";

function HousingSection(){
    return(
        <section className="housing_bg">
            <div className="container">
                <div className="row align-items-center">
        <div className="col-md-6">
           <HousingContent/>
        </div>
        <div className="col-md-6"> 
            <Housingimg/>
        </div>
        </div>
        </div>
        </section>
    )
}
export default HousingSection