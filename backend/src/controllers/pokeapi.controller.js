import { getPokemonFamilyService, getPokemonService } from "../services/pokeaip.services.js";

export const getPokemonsController = async (req, res) => {
    console.log('chegou')
    try {
        const pokemons = await getPokemonService()
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