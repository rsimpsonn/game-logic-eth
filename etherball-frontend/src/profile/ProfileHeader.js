import React from 'react';

import add from '../assets/add_icon.png';
import bball from '../assets/bball_icon.png';
import '../themes.css';

const ProfileHeader = props => {
    return (
        <div className="form-group" style={{ display: "flex", flexDirection: "row", margin: "30px 40px 0px 40px" }}>
            <img 
                src={bball} 
                alt="search" 
                style={{ height: "30px", marginTop: "10px" }}
            />
            <h4 className="text-muted" style={{ fontWeight: "normal", margin: "5px 30px 0px 30px" }}> Lineups </h4>
            <img 
                src={add} 
                alt="search" 
                style={{ height: "30px", marginTop: "10px", marginRight: "30px" }}
                onClick={props.onAdd}
            />
        </div>    
    );
}

export default ProfileHeader;
