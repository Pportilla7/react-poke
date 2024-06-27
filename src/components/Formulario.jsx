import React from 'react';

const Formulario = ({ setPokemon }) => {
  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <form className="formulario">
      <label htmlFor="pokemon">Nombre del Pokémon:</label>
      <input
        type="text"
        id="pokemon"
        name="pokemon"
        onChange={handleChange}
      />
    </form>
  );
}

export default Formulario;
