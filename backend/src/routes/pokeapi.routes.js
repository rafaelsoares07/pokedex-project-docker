import { Router } from "express";
import { getPokemonsController, getPokemonsFamilyController } from "../controllers/pokeapi.controller.js";

const pokeapiRoutes = Router()

pokeapiRoutes.get("/pokeapi", getPokemonsController)
pokeapiRoutes.get("/pokeapi/getFamily", getPokemonsFamilyController)

export default pokeapiRoutes