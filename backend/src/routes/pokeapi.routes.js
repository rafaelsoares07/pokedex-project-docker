import { Router } from "express";
import { getPokemonsController } from "../controllers/pokeapi.controller.js";

const pokeapiRoutes = Router()

pokeapiRoutes.get("/pokeapi", getPokemonsController)

export default pokeapiRoutes