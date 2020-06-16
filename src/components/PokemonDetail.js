import React from 'react';

const PokemonDetail = (props) => {

  if(!props.pokemon) return null;

  return (
    <>
      <h3>Name: { props.pokemon.name }</h3>
      <img src={ props.pokemon.sprites.front_default } alt={ props.pokemon.name }/>
      <h3>Weight: { props.pokemon.weight }</h3>
      <h3>Height: {props.pokemon.height }</h3>
    </>
  );
};

export default PokemonDetail;
