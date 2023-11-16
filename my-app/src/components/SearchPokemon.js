import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "/Users/faheemhassan/Practice Projects/Pokemon-App/my-app/src/components/searchpokemon.css";

export function SearchPokemon() {
    const [pokemonName, setPokemonName] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        setErrorMessage(null);
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
          .then((response) => response.json())
          .then((data) => {
            setPokemonName(data.name);
          })
          .catch((error) => {
            setErrorMessage(`there is an error`);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [pokemonName]);
    
    
    return (
      <div className='App'>
        <div className='titlesection'>
        <h1>Pokeman</h1>
        <input type= "text" 
        onChange= {(event)=> {setPokemonName(event.target.value)}}>
  
        </input>
        <button onClick= {SearchPokemon}>Search Pokemon</button>
        </div>
      </div>
    );
  }