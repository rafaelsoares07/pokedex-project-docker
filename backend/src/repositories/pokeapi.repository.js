import axios from 'axios'

export const getPokemons = async () => {

    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=100&limit=50")

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

    let currentPokemon = responseEvolutionsDetails.data.chain

    while (currentPokemon && currentPokemon.evolves_to) {

        const response = await axios.get(currentPokemon.species.url);
        arrayPokemons.push(response.data);
        currentPokemon = currentPokemon.evolves_to[0];
        console.log(currentPokemon.evolves_to[0])

        if (!currentPokemon.evolves_to[0]) {
            const response = await axios.get(currentPokemon.species.url);
            arrayPokemons.push(response.data);
            break;
        }
    }

    return arrayPokemons;
}

