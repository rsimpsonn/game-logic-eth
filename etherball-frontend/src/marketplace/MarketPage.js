import React, { Component } from 'react';

import ShopCard from './ShopCard';
import FilterMarket from './FilterMarket';

class MarketPage extends Component {

    state = {
        characters: [
            {
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
            },
            {
                name: "Al Gordon",
                species: "Sloth",
                position: "PG",
                games: 8,
                height: "3'6",
                speed: 64,
                strength: 46,
                shot: 71,
                imageSrc: "http://placehold.it/358x358/E8117F/FFFFFF",
                price: 0.01,
            },
            {
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
            },
            {
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
            },
        ],
        search: '',
    }

    //Do axios request here
    componentDidMount() {
        console.log("axios request for players in the store");
    }

    //Handle filtering characters by position
    sortPosition = event => {
        console.log("You filtered by position "+event.target.value);
    }

    //Handle filtering characters by species
    sortSpecies = event => {
        console.log("You filtered by species "+event.target.value);
    }

    //Handle typing in the search bar
    onSearchChange = event => {
        console.log(event.target.value);
        this.setState({ ...this.state, search: event.target.props });
    }

    onBuyCard = name => {
        console.log("Axios post because player bought "+name);
    }

    onSelect = name => {
        console.log("Navigation to the detail page");
    }

    render() {

        const players = this.state.characters.map(player => {
            return (<ShopCard 
                key={player.name} 
                player={player}
                onBuyCard={() => this.onBuyCard(player.name)}
                onClick={() => this.onSelect(player.name)} />);
        });

        return (
            <div style={{ margin: "30px" }}>
                <FilterMarket
                    sortSpecies={this.sortSpecies}
                    sortPosition={this.sortPosition}
                    onSearchChange={this.onSearchChange}
                    value={this.state.value}
                />

                <hr />
                <div style={{ display: "flex", flexDirection: "row"}}>
                    {players}
                </div>
            </div>
        );
    }

}

export default MarketPage;