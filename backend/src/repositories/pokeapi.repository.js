import axios from 'axios'
export const getPokemons = async () => {

    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/")

    const pokemonList = pokemons.data.results.map(pokemon => axios.get(pokemon.url))

    const pokemonsResponses = await Promise.all(pokemonList)

    const pokemonsDetails = pokemonsResponses.map(response =>response.data)

    console.log(pokemons.data.next)

    const pokemonReturn = {
        next:pokemons.data.next,
        pokemonsDetails
    }

    return pokemonReturn;
}
