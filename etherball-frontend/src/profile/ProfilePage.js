import React, { Component } from 'react';

import '../themes.css';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';

class ProfilePage extends Component {

    state = {
        playercards: [
            {
                id: "Dudley James",
                name: "Dudley James",
                species: "Sloth",
                position: "PG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
                color: "#F4ECDF",
            },
            {
                id: "Al Gordon",
                name: "Al Gordon",
                species: "Sloth",
                position: "SG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
                color: "#DBF0F5",
            },
            {
                id: "Al Gordon 2",
                name: "Al Gordon 2",
                species: "Sloth",
                position: "PG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
                color: "#F4ECDF",
            },
            {
                id: "Al Gordon 3",
                name: "Al Gordon 3",
                species: "Sloth",
                position: "PG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
                color: "#DBF0F5",
            },
            {
                id: "Al Gordon 4",
                name: "Al Gordon 4",
                species: "Sloth",
                position: "PG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
                color: "#F4ECDF",
            },
        ],
        lineups: [ //Ordered by player.id
            [
                null,
                null,
                null,
                null,
                null,
            ],
        ] // Order is pg, sg, sf, pf, c
    }

    onAddLineup() {
        console.log("Tried to add a lineup");
    }

    render() {

        //For each lineup:
        const lineupcomponent = this.state.lineups.map(lineup => {
            console.log(lineup);
            return (
                <div style={{ margin: "20px 10px 20px 10px" }}>
                    <h4 style={{ marginLeft: "40px"}}> Starting Lineup </h4> 
                    <div style={styles.labels}>
                        <span> PG </span>
                        <span> SG </span>
                        <span> SF </span>
                        <span> PF </span>
                        <span> C </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        
                        {
                            lineup.map(key => {
                                return (
                                   <ProfileCard />
                                );
                            })
                        }
                    </div>
                </div>
            );
        })

        return (
            <div>
                <ProfileHeader
                    onAdd={this.onAddLineup.bind(this)}
                />
                <hr style={{ margin: "20px 40px 0px 40px" }} />
                {lineupcomponent}
            </div>
        );
    }

}

const styles = {
    labels: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "10px",
        color: "#CCCCCC"
    }
}

export default ProfilePage;