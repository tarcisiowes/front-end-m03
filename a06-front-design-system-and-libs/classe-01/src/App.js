import './App.css';
import CustomCard from './components/deck'
import NavBar from './components/navbar'
import { useState, useEffect } from 'react'

function App() {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    handlereqToAPI()
  },[])
  
  async function handlereqToAPI() {

    try {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
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

        <CustomCard name={ pokemon.name } abilities={ pokemon.abilities } image={ pokemon.image}/>
        
      </div>

    </div>
  );
}

export default App;
