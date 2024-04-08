import { getPokemons } from "../repositories/pokeapi.repository.js";


export const getPokemonService = async () => {
 
    const pokemons= await getPokemons()
    return pokemons
    
}

