import './App.css';
import CustomCard from './components/deck'
import NavBar from './components/navbar'
import { useState, useEffect } from 'react'
import SearchItem from './components/searchitem'

function App() {

  const [pokemon, setPokemon] = useState({})
  const [searchPokemon, setSearchPokemon] = useState('pikachu')


  useEffect(() => {
    handleReqToAPI()
  },[])
  
  async function handleReqToAPI() {

    try {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      const { name, sprites: { other }, abilities } = await response.json()
      const { dream_world: {front_default}} = other
      const currentPokemon = {

        name,
        abilities,
        image: front_default
      }

      setPokemon(currentPokemon)

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <div className="App">

      <NavBar />

      <div className="deck">

        <CustomCard
          name={ pokemon.name }
          abilities={ pokemon.abilities }
          image={ pokemon.image }
        />
        
        <SearchItem
          searchPokemon={ searchPokemon }
          setSearchPokemon={ setSearchPokemon }
          handleReqToAPI={ handleReqToAPI }          
        />        
        
      </div>

    </div>
  );
}

export default App;
