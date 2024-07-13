import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCard'
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon');
      setPokemonList(result.data.results);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      <div className="pokemon-list">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon?.name} link={pokemon?.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
