import axios from 'axios'

export const getPokemons = async (url) => {
    const pokemons = await axios.get(url);

    // Mapeia a lista de pokémons para uma lista de promessas para obter os detalhes de cada pokémon
    const pokemonList = pokemons.data.results.map(pokemon => axios.get(pokemon.url));

    const batchSize = 100; // Define o tamanho do lote

    // Divide a lista de promessas em lotes menores
    const batches = [];
    for (let i = 0; i < pokemonList.length; i += batchSize) {
        batches.push(pokemonList.slice(i, i + batchSize));
    }

    // Faz as solicitações em lotes
    const pokemonsDetails = [];
    for (const batch of batches) {
        const batchResponses = await Promise.all(batch);
        const batchDetails = batchResponses.map(response => response.data);
        pokemonsDetails.push(...batchDetails);
    }

    // Constrói o objeto de retorno
    const pokemonReturn = {
        next: pokemons.data.next,
        pokemonsDetails
    };

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
