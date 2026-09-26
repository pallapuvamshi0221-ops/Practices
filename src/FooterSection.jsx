import React from "react";
import FooterContent1 from "./FooterContent1";
import FooterContent2 from "./FooterContent2";
import FooterContent3 from "./FooterContent3";
import FooterContent4 from "./FooterContent4";

function FooterSection(){
    return(
        <footer className="footer_bg">
            <div className="container">
                <div className="row">
        <div className="col-md-3">
            <FooterContent1/>
        </div>
        <div className="col-md-3">
            <FooterContent2/>
        </div>
        <div className="col-md-3">
            <FooterContent3/>
        </div>
        <div className="col-md-3 mt-4 text-center">
            <FooterContent4/>
        </div>
        </div>
        </div>
        </footer>
    )
}
export default FooterSection