import React, { Component } from 'react';
import PokemonSelector from '../components/PokemonSelector.js';
import PokemonDetail from '../components/PokemonDetail.js';

class PokemonContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        pokemonList: [],
        selectedPokemon: ""
      };

      this.handlePokemonSelect= this.handlePokemonSelect.bind(this);
  }

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({pokemonList: res.results}))
    .catch(err => console.error);
  }

  handlePokemonSelect(pokemonName) {

    const foundPokemon = this.state.pokemonList.find((pokemon) => {
      return pokemon.name === pokemonName;
    });

    if(foundPokemon) {
      fetch(foundPokemon.url)
      .then(res => res.json())
      .then(res => this.setState ({selectedPokemon: res}))
      .catch(err => console.error);
    }


  }

  render() {


    return (
      <>
        <h1>Pokemon Selector!</h1>
        <PokemonSelector list={this.state.pokemonList} onSelect={this.handlePokemonSelect}/>
        <PokemonDetail pokemon={this.state.selectedPokemon}/>
      </>
    );
  }
};


export default PokemonContainer;
