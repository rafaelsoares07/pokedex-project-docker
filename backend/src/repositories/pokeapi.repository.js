import axios from 'axios'

export const getPokemons = async () => {

    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")

    const pokemonList = pokemons.data.results.map(pokemon => axios.get(pokemon.url))

    const pokemonsResponses = await Promise.all(pokemonList)

    const pokemonsDetails = pokemonsResponses.map(response => response.data)

    console.log(pokemons.data.next)

    const pokemonReturn = {
        next: pokemons.data.next,
        pokemonsDetails
    }

    return pokemonReturn;
}

export const getPokemonFamily = async (url) => {
    let arrayPokemons = []

    const responseSpecieDetails = await axios.get(url)
    const responseEvolutionsDetails = await axios(responseSpecieDetails.data.evolution_chain)
    let haveMoreOne = false

    let currentPokemon = responseEvolutionsDetails.data.chain

    if(currentPokemon.evolves_to.length!=0){
        haveMoreOne=true
    }

    while (currentPokemon.evolves_to.length!=0) {

        const response = await axios.get(currentPokemon.species.url);
        arrayPokemons.push(response.data);
        currentPokemon = currentPokemon.evolves_to[0];
    }

    if(haveMoreOne){
        const response = await axios.get(currentPokemon.species.url);
        arrayPokemons.push(response.data);
    }

    return arrayPokemons;
}
