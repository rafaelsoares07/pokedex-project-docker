import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import pokeapiRoutes from "./routes/pokeapi.routes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(pokeapiRoutes)

app.listen(3000, ()=>{
    console.log("Servidor Iniciou tempo real")
})

