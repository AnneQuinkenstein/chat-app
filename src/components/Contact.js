import React from 'react';
import './Contact.css'; 

function Contact(){
    const online = true; 
    const Status = online? "online":"offline";

    return (
       
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/women/23.jpg" alt="Random Generator " />
        <div>
        <p className="name">Gisela Dingens</p>
        <p className="status"> <span className="status-online"></span> 
        {Status}</p>
        </div>
    </div>
    )
}

export default Contact