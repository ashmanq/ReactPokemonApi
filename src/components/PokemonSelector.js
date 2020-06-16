import React from 'react';


const PokemonSelector = (props) => {

  const pokemonList = props.list.map((pokemon, index) => {
    return <option value={pokemon.name} key={index}>{pokemon.name}</option>
  })

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
  <select id="pokemon-select" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a pokemon...</option>
    { pokemonList }
  </select>
  );
}

export default PokemonSelector;
