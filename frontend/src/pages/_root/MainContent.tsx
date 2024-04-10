import axios from 'axios'
import React, { ContextType } from 'react'
import CardPokemon from './CardPokemon'
import ModalDetailsPokemon from './ModalDetailsPokemon'
import HomeContext from '../../context/HomeContext/HomeContext'

export default function MainContent() {

    const homeContext = React.useContext(HomeContext)

    const [open, setOpen] = React.useState(false)
    const [pokemonDetail, setPokemonDetail] = React.useState({})
    const [nextPage, setNextPage] = React.useState(null)
    const [visibility, setVisibility] = React.useState(true)
   


    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://10.1.11.124:3000/pokeapi")
                homeContext.setPokemons(response.data.pokemonsDetails)
                setNextPage(response.data.next)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 teste'>
            {open && <ModalDetailsPokemon pokemon={pokemonDetail} open={open} setOpen={setOpen} />}
            {
            homeContext.filterActive ?
            homeContext.filterPokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
            :
            homeContext.pokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
            }
            {}
        </div>
    )
}


    

