import { getPokemons, getPokemonFamily } from "../repositories/pokeapi.repository.js";
import fs from 'fs'



export const getPokemonService = async (url) => {

    try {
        const pokemonstxt = fs.readFileSync("./teste.txt", "utf-8");
        return JSON.parse(pokemonstxt)
    } catch (err) {

        const pokemons = await getPokemons(url)
       
        const modifiedPokemons = pokemons.pokemonsDetails.map(pokemon => {
            const { id, name, abilities,height,types,weight, stats,species } = pokemon
            return { id, name, abilities,height,types,weight, stats,species }
            
        });


        const modifiedPokemonsString = JSON.stringify(modifiedPokemons);

        fs.writeFile('./teste.txt', modifiedPokemonsString, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log("deu certo")
        })

        return modifiedPokemons
    }


}

export const getPokemonFamilyService = async (url) => {

    const pokemons = await getPokemonFamily(url)
    return pokemons

}