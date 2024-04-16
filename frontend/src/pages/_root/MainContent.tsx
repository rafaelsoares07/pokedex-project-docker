import axios from 'axios'
import React, { useState } from 'react'
import CardPokemon from './CardPokemon'
import ModalDetailsPokemon from './ModalDetailsPokemon'
import HomeContext from '../../context/HomeContext/HomeContext'
import pako from 'pako'


export default function MainContent() {

    const homeContext = React.useContext(HomeContext)

    const [open, setOpen] = React.useState(false)
    const [pokemonDetail, setPokemonDetail] = React.useState({})
    const [nextPage, setNextPage] = React.useState("http://10.1.11.124:3000/pokeapi?url=")
    const [visibility, setVisibility] = React.useState(true)
    const [page, setPage] = React.useState(0)
    const [loadding, setLoading] = React.useState(true)

    const shouldFilter = Object.values(homeContext.filterActive).some(Boolean);


    function scrollToPageTop() {
        window.scrollTo(0, 0)
    }

    React.useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem("pokemons")) {
                console.log("caiu no if")
                const pokes = JSON.parse(localStorage.getItem("pokemons"))
                homeContext.setPokemons(pokes)
                console.log(pokes)
                setLoading(false)
            } else {
                try {
                    const response = await axios.get(nextPage)
                    console.log(response.data)

                    homeContext.setPokemons([...homeContext.pokemons, ...response.data])

                    localStorage.setItem("pokemons", JSON.stringify(response.data))
                    setLoading(false)
                } catch (error) {
                    alert(error)
                }
            }

        }
        fetchData()
    }, [page])



    return (
        <div className=''>

            <div onClick={() => scrollToPageTop()} className='bg-bug fixed bottom-10 right-3 h-10 w-10  border rounded-full flex justify-center items-center'>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 teste'>
                {open && <ModalDetailsPokemon pokemon={pokemonDetail} open={open} setOpen={setOpen} />}
                {
                    loadding ? "Carregando..." : shouldFilter ?
                        homeContext.filterPokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
                        :
                        homeContext.pokemons.map((item, index) => <CardPokemon visibility={visibility} setPokemonDetail={setPokemonDetail} open={open} setOpen={setOpen} key={index} pokemon={item} />)
                }

            </div>

        </div>

    )
}




