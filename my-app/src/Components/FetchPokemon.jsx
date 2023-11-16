
import React, { useState, useEffect } from "react";
import "./FetchPokemon.css"

const FetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100"
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setPokemons(data.results);
        };

        fetchData();
    }, []);

    return (
        <div >
            <ul>
                {pokemons.map(({ name, url }) => (
                    <li className="pokemon-list" key={url}>{name}</li>
                ))}
            </ul>
        </div>

    );
};

export default FetchPokemons