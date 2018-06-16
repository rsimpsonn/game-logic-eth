import React from 'react';

import Backdrop from '../components/Backdrop.js';
import dummyimage from "../assets/sloth_1.png";

const ProfileCard = props => {
    return (
        <div>
            <Backdrop width="220px" height="220px" color="#CCCCCC">
                <img src={dummyimage}
                    alt="Player"
                    style={{ height: "160px", width: "160px", margin: "30px" }}
                    onClick={props.onClick}
                />
            </Backdrop>
        </div>
    );
}

export default ProfileCard;