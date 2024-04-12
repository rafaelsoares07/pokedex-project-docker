import { getPokemons, getPokemonFamily } from "../repositories/pokeapi.repository.js";


export const getPokemonService = async (url) => {
 console.log("SERVICE")
    const pokemons= await getPokemons(url)
    return pokemons
    
}

export const getPokemonFamilyService = async (url) => {
 
    const pokemons= await getPokemonFamily(url)
    return pokemons
    
}