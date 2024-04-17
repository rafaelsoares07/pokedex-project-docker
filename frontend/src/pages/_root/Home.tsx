import React, { useContext } from 'react'
import ImagePokebola from '../../assets/pokeball.svg'
import MainContent from './MainContent'
import HomeContext from '../../context/HomeContext/HomeContext'
import TypesFilter from './TypesFilter'

export default function Home() {

  const [visibility, setVisibility] = React.useState(true)
  const [searchAdvance,setSearchAdvance] = React.useState(false)
  const arrayTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'normal', 'grass', 'ground', 'ice', 'poison', 'psychic', 'rock', 'steel', 'water']

  const [filterPokemons, setFilterPokemons] = React.useState([])
  const [filterActive, setFilterActivite] = React.useState({
    type: false,
    weigth: false,
    heigth:false,
    interval:false, 
    geration:false,
    name:false
  })
  const [pokemons, setPokemons] = React.useState([])
console.log(pokemons)

  return (
    <HomeContext.Provider value={{ visibility, pokemons, setPokemons, filterPokemons, setFilterPokemons, filterActive, setFilterActivite }}>
      <section className='min-h-screen'>
        <nav className='bg-primary p-2 mb-3'>
          <div className='flex flex-col sm:flex sm:flex-row justify-around items-center w-full'>
            <div className='flex gap-2 p-4 items-center'>
              <img className='w-16 h-16' src={ImagePokebola} onClick={()=>setVisibility((prev)=>!prev)} />
              <h1 className='text-white text-5xl'>Pokedex</h1>
            </div>

            <div className='mt-2 flex flex-col items-center justify-center'>
              <div className={`w-5/6 ${searchAdvance?'block':'hidden'}`}>
               <TypesFilter/>
              </div>
              
              <h1 onClick={()=>setSearchAdvance((prev)=>!prev)} className='text-white text-xl m-2 bg-primary p-3 translate-y-10 rounded-2xl '>
                {searchAdvance? "Ocultar Busca Avançada": "Mostrar Busca Avançada"}
              </h1>
            </div>
          </div>
        </nav>
        <MainContent />
      </section>
    </HomeContext.Provider>
  )
}
