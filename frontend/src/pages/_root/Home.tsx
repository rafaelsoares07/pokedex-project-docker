import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext/AuthContext'
import ImagePokebola from '../../assets/pokeball.svg'
import ImageFilterButton from '../../assets/filter.svg'
import MainContent from './MainContent'
import SideMenu from './SideMenu'
import HomeContext from '../../context/HomeContext/HomeContext'

export default function Home() {

  const [open, setOpen] = React.useState(false)
  const [openSideMenu, setOpenSideMenu] = React.useState(false)
  const arrayTypes =['bug','dark','dragon','electric','fairy','fighting','fire','flying','ghost','normal','grass','ground','ice','poison','psychic','rock','steel','water']

  const [filterPokemons, setFilterPokemons] = React.useState([])
  const [filterActive, setFilterActivite] = React.useState(false)
  const [pokemons, setPokemons] = React.useState([])

  return (
    <HomeContext.Provider value={{pokemons, setPokemons, filterPokemons, setFilterPokemons, filterActive, setFilterActivite}}>
      <section className='min-h-screen'>
        <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} arrayTypes={arrayTypes}/>
        <nav className='bg-primary p-2'>
          <div className='flex flex-col sm:flex sm:flex-row justify-around items-center w-full'>
            <div className='flex gap-2 p-4 items-center'>
              <img className='w-16 h-16' src={ImagePokebola} />
              <h1 className='text-white text-5xl'>Pokedex</h1>
            </div>

            <div className='flex items-center justify-center w-full sm:w-2/4 md:w-2/5' onClick={()=>setOpenSideMenu(!openSideMenu)}>
              <input type="text" className='h-10 w-4/5 ' />
              <button className='flex items-center justify-center h-10 w-10 rounded-3xl bg-white ml-5'>
                <img className='w-6' src={ImageFilterButton} />
              </button>
            </div>
          </div>
        </nav>
        <MainContent />
      </section>
      </HomeContext.Provider>
  )
}
