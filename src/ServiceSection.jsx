import React from "react";
import ServiceHeader from "./ServiceHeader";
import Services from "./Services";

function ServiceSection() {

    return (
        <section className="service-section">
            <ServiceHeader/>
            <Services/>
            <div className="service-button">
                <button className="btn btn-warning text-white">View More</button>
            </div>

        </section>
    )
}

export default ServiceSection;