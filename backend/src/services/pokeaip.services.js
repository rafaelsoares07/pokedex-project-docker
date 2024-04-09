import { getPokemons, getPokemonFamily } from "../repositories/pokeapi.repository.js";


export const getPokemonService = async () => {
 
    const pokemons= await getPokemons()
    return pokemons
    
}

export const getPokemonFamilyService = async (url) => {
 
    const pokemons= await getPokemonFamily(url)
    return pokemons
    
}