import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import PokemonResult from './components/PokemonResult';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemon === '') return;

    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      setResult(null);

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('Pokemon no encontrado');
        }
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemon]);

  return (
    <div className="app">
      <h1>Buscador de Pokémon</h1>
      <Formulario setPokemon={setPokemon} />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {result && <PokemonResult result={result} />}
    </div>
  );
}

export default App;
