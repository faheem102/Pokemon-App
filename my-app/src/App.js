import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  
    
  return (
    <div className='App'>
      <div className='titlesection'>
      <h1>Pokeman</h1>
      <input type= "text" 
      onChange= {(event)=> {setPokemonName(event.target.value)}}>

      </input>
      <button >Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
