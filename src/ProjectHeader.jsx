import React from "react";
function ProjectHeader(){
   return(
    <>
    <div className="project_header text-center">
           <h3>OUR PROJECTS</h3>
    </div>
      <div className="container">
                    <ul className="nav justify-content-center mt-3">
                        <li className="nav-item ">
                            <a className="nav-link active text-decoration-none text-warning" aria-current="page" href="#">ALL</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-decoration-none text-dark" href="service.html" >ENGINEERING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none text-dark" href="amazing.html">ELECTRICAL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-none text-dark" href="blog.html">PLUMBING</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link text-decoration-none text-dark" href="page 404.html"> HOUSE REPAIR</a>
                        </li>
                    </ul>
                    
                </div>
                
    </>
   )
}
export default ProjectHeader