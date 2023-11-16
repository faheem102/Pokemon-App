
import React, { useState, useEffect } from "react";
import "./FetchPokemon.css";
import logo from "../Images/pokemon.png"

const FetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100"
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setPokemons(data.results);
            console.log(data)
        };

        fetchData();
    }, []);

    return (
        <div >
            <ul>
                {pokemons.map(({ name, url }) => (
                    <div className="pokemon-list">
                        <li className="list"  key={url}>{name}</li>
                        <img className="pokemon-image" alt="pokemon" src={logo}></img>
                    </div>

                ))}
            </ul>
        </div>

    );
};

export default FetchPokemons