import './App.css';
import CustomCard from './components/deck'
import NavBar from './components/navbar'
import { useState, useEffect } from 'react'
import SearchItem from './components/searchitem'
import { useLocalStorage } from 'react-use'


function App() {

  const [cacheSearch, setCacheSearch, removeCacheSearch ] = useLocalStorage('pokemonSearch', [])
  const [pokemon, setPokemon] = useState({})
  const [searchPokemon, setSearchPokemon] = useState('')


  useEffect(() => {
    handleReqToAPI()
  }, [])
  
  useEffect(() => {

  }, [pokemon])

  function checkInCache() {
    
    cacheSearch.find(item => item.nome === searchPokemon)
  }

  function saveInCache() {
    
    setCacheSearch([...cacheSearch, pokemon])
    
  }
  
  async function handleFindPokemon() {
    
    const result = checkInCache()

    if (result) {
      return setPokemon(result)
    }

    await handleReqToAPI()
  }

  async function handleReqToAPI() {

    try {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon || 'pikachu'}`)
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
          handleFindPokemon={ handleFindPokemon }          
        />        
        
      </div>

    </div>
  );
}

export default App;
