import axios from 'axios'
import React from 'react'
import CardPokemon from './CardPokemon'
import ModalDetailsPokemon from './ModalDetailsPokemon'

export default function MainContent() {

    const [open,setOpen] = React.useState(false)
    const [pokemonDetail, setPokemonDetail] = React.useState({})
    const [pokemons, setPokemons] = React.useState([])
    const [nextPage, setNextPage] = React.useState(null)

    React.useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get("http://192.168.0.14:3000/pokeapi")
    
                setPokemons(response.data.pokemonsDetails)
                setNextPage(response.data.next)
            } catch (error) {
                alert(error)
            }
        }
    
        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 teste'>
            {open && <ModalDetailsPokemon pokemon={pokemonDetail} open={open} setOpen={setOpen}/>}
            {pokemons.map((item, index) => <CardPokemon setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item}/>)}
        </div>
    )
}
