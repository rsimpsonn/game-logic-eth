import React, { Component } from 'react';

import '../themes.css';
import Backdrop from '../components/Backdrop';
import dummyimage from "../assets/sloth_2.png";

class CharacterPage extends Component {

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", margin: "100px 200px 50px 200px" }}>
                <Backdrop style={styles.imageDiv} width="500px" height="500px" color="#DBF0F5" >
                    <img src={dummyimage} alt="Player" style={{ height: "300px", width: "auto", margin: "120px" }} />
                </Backdrop>
                <div style={{ width: "100%", margin: "0px 20px 20px 20px" }}>
                    <h2>
                        <span style={{ fontSize: "50px" }}> Name </span> 
                        <span style={{ color: "#cccccc", fontSize: "20px", fontWeight: "normal" }}> 
                            &ensp;.&ensp;props.player.species&ensp;.&ensp;props.player.position 
                        </span>
                    </h2>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <div style={styles.attribute}>
                            <span style={{ color: "#cccccc" }}> Attributes </span>
                            <h4> NUM strength </h4>
                            <h4> NUM speed </h4>
                            <h4 style={{ color: "#cccccc" }}> NUM shot </h4>
                            <h4 style={{ color: "#dddddd" }}> NUM confidence </h4>
                        </div>
                        <div style={styles.attribute}>
                            <span style={{ color: "#cccccc" }}> Per Game Statistics </span>
                            <h4> NUM minutes </h4>
                            <h4> NUM points </h4>
                            <h4 style={{ color: "#cccccc" }}> NUM assists </h4>
                            <h4 style={{ color: "#dddddd" }}> NUM rebounds </h4>
                        </div>
                    </div>
                    <img src="https://i1.wp.com/www.dothemovement.com/wp-content/uploads/2018/01/Fitness-Bell-Curve.jpg"
                        style={{ height: "250px"}}
                    />
                </div>
            </div>
        );
    }

}

const styles = {
    imageDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    attribute: {
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        margin: "20px 30px 0px 30px"
    }
}

export default CharacterPage;