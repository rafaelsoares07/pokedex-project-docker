import { getPokemonFamilyService, getPokemonService } from "../services/pokeaip.services.js";

export const getPokemonsController = async (req, res) => {

    let url = req.query["url"]

    if(url == ""){
        url = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
    }

    try {
        const pokemons = await getPokemonService(url)
        res.status(201).send(pokemons)

    } catch (error) {

        if (error.code) {
            res.status(error.code).json({ message: error.message });
        } else {
            console.log(error)
            res.status(500).send(error);
        }

    }
};

export const getPokemonsFamilyController = async (req, res) => {
    
  const url = req.query["url"]

    try {
        const pokemons = await getPokemonFamilyService(url)
        res.status(201).send(pokemons)

    } catch (error) {

        if (error.code) {
            res.status(error.code).json({ message: error.message });
        } else {
            console.log(error)
            res.status(500).send(error);
        }

    }
};