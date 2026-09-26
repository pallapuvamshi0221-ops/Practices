import React from "react";

function LocationForm(){
        return (
        <div className="quote-box">

            <h2>GET A QUOTE</h2>

            <form>
                <div className="input-row p-2">

                    <input type="text" placeholder="Your Name"/>

                    <input type="email"placeholder="Your Email"/>

                </div>

                <div className="input-row p-2">

                    <input type="text"placeholder="Your Subject"/>

                    <input type="tel"placeholder="Your Phone Number"/>

                </div>
        
                <textarea placeholder="Your Message" rows={2} className="p-5"></textarea>
                 <div>
                <button type="submit"className="btn btn-warning text-white">SUBMIT</button>
                  </div>
            </form>
            
        </div>
    );
}
export default LocationForm