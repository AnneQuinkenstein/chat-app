import React, { Component } from 'react';
import './Contact.css'; 
import PropTypes from 'prop-types'; 


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            online: this.props.online,
        };
    }

    changeOnlineState = (event) => {
        const actualOnlineState = !this.state.online;
        this.setState({ online: actualOnlineState });
    }

    render(){
        return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="Random Generator " />
            <div>
                <p className="name">{this.props.name}</p>
                <div className="status"> 
                    <div className={this.state.online ?"status-online": "status-offline"}></div>
                    <p onClick={ this.changeOnlineState } className="status-text">{this.state.online ? "online": "offline"}</p>
                </div>
            </div>
        </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired, 
    online: PropTypes.bool.isRequired, 
    name: PropTypes.string.isRequired, 
}; 


export default Contact