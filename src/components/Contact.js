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
            <div className="status"> 
                <div className="status-online"></div>
                <p className="status-text">{Status}</p>
            </div>
        </div>
    </div>
    )
}

export default Contact