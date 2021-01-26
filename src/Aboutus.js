import React from 'react';
import deepu from "./deepu.jpg";
const Aboutus = () => {
    return (
        <div className="card">
        <img src={deepu} alt="" className="card-img-top"/>
        <div className="card-body">
        <div className="cart-title h2" >NAME:MISS DEEPTHI DONEPUDI</div>
        <div className="subtitle h2">OWNER OF SAMBAR BUDDI RESTAURANT</div>
        <div className="subtitle h2">EDUCATION:M.SC ORGANIC CHEMISTRY</div>
        <p className="cart-text h4">The whole appreciation and the hardwork behind this app goes to my one and only bestfriend who is capable of doing anything and everything for his loved ones. 
        And I'm super proud of him and will always be ❤️❤️</p>
        </div>
        <div className="card-footer h3">
        <address>Address : Sambar buddi restaurant ward 02, Near Vidhyanikethan school ,
        Sriramnagar pincode:583268</address>
        </div>
            
        </div>
      );
}
 
export default Aboutus;