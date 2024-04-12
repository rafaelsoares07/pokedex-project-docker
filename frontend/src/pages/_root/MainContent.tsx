import axios from 'axios'
import React, { useState } from 'react'
import CardPokemon from './CardPokemon'
import ModalDetailsPokemon from './ModalDetailsPokemon'
import HomeContext from '../../context/HomeContext/HomeContext'

export default function MainContent() {

    const homeContext = React.useContext(HomeContext)

    const [open, setOpen] = React.useState(false)
    const [pokemonDetail, setPokemonDetail] = React.useState({})
    const [nextPage, setNextPage] = React.useState("http://10.1.11.124:3000/pokeapi?url=")
    const [visibility, setVisibility] = React.useState(true)
    const [page, setPage] = React.useState(0)


    const shouldFilter = Object.values(homeContext.filterActive).some(Boolean);

    // console.log(shouldFilter)
    // console.log(nextPage)
    // console.log(page)

    function scrollToPageTop(){
        window.scrollTo(0,0)
    }

    React.useEffect(() => {
        async function fetchData() {
            // console.log("entrou no fetch")
            try {
                const response = await axios.get(nextPage)
                // console.log(response)
                homeContext.setPokemons([...homeContext.pokemons, ...response.data.pokemonsDetails])
                setNextPage(`http://10.1.11.124:3000/pokeapi?url=${response.data.next}`)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
    }, [page])

    // console.log(homeContext.pokemons)
    // console.log(shouldFilter)

    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 teste'>
                {open && <ModalDetailsPokemon pokemon={pokemonDetail} open={open} setOpen={setOpen} />}
                {
                    shouldFilter ?
                        homeContext.filterPokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
                        :
                        homeContext.pokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
                }
            </div>

            {shouldFilter ? null:<button onClick={()=>setPage((prev)=>prev+1)}>Listar mais</button>}
            <button onClick={()=>scrollToPageTop()}> TOPPPPP</button>
        </div>

    )
}




