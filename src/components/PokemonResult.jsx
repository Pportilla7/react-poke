import React from 'react';

const PokemonResult = ({ result }) => {
  return (
    <div className="pokemon-result">
      <h2>{result.name}</h2>
      <img src={result.sprites.front_default} alt={result.name} />
    </div>
  );
}

export default PokemonResult;
