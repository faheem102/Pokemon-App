import React from "react";
import "./Main.css";
import FetchPokemons from "./FetchPokemon"


const Main = () => {
    return (
        <>
            <div className="container">
                <div className="left-content">
                    <p className="heading">Choose Your Pokemon</p>
                    <FetchPokemons />
                </div>
                <div className="right-content">
                    <p>Pokemon Card</p>

                </div>
            </div>

        </>
    )
}

export default Main;