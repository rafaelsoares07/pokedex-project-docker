import React from 'react'
import ImageClose from '../../assets/cruz.png'
import TagAbility from './TagAbility'
import axios from 'axios'
import StrendWorg from './StrendWorg'
export default function ModalDetailsPokemon(props) {

  const [activeAbilitySelect, setActiveAbilitySelect] = React.useState([])
  const [pokemonsFamily, setPokemonsFamily] = React.useState(null)



  const colorClasses = {
    'bug': '#A7B723',
    'dark': "#75574C",
    'dragon': '#7037FF',
    'eletric': '#F9CF30',
    'fairy': '#E69EAC',
    'fighting': '#C12239',
    'fire': '#F57D31',
    'flying': '#A891EC',
    'ghost': '#70559B',
    'normal': '#AAA67F',
    'grass': '#74CB48',
    'ground': '#DEC16B',
    'ice': '#9AD6DF',
    'poison': '#A43E9E',
    'psychic': '#FB5584',
    'rock': '#B69E31',
    'steel': '#B7B9DO',
    'water': '#6493EB'
  };


  React.useEffect(() => {
    async function fetchData() {
      try {
        const params = {
          url: props.pokemon.species.url
        }
        const response = await axios.get(`http://10.1.11.124:3000/pokeapi/getFamily?url=${props.pokemon.species.url}`)
        setPokemonsFamily(response.data)
      } catch (error) {
        alert(error)
      }
    }

    fetchData()
  }, [])

  let color;

  if (props.pokemon.types.length > 1) {
    color = {
      backgroundImage: `linear-gradient(to top, ${colorClasses[props.pokemon.types[0].type.name]}, ${colorClasses[props.pokemon.types[1].type.name]})`
    }
  } else {
    color = {
      backgroundColor: `${colorClasses[props.pokemon.types[0].type.name]}`
    }
  }


  function closeModal() {
    props.setOpen(prev => !prev)
    document.body.style.overflow = "auto";
  }

  return (
    <div style={color} className={`overflow-y-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 border-gray-900 p-5`}>

      <div>
        <p className='text-4xl md:text-7xl text-white text-center'>{props.pokemon.name}</p>

        <div className='flex items-center'>

          <div className='bg-white'>
          <img className='cursor-pointer row-span-2 w-36 mr-5 filter brightness-100 invert grayscale hover:brightness-100 hover:invert-0 hover:grayscale-0' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`} />
          </div>
          
          <div>
            <p className='text-white text-xl my-2'>Heigth: <span>{props.pokemon.height < 10 ? `0.${props.pokemon.height}` : props.pokemon.height} meters</span></p>
            <p className='text-white text-xl my-2'>Weigth: <span>{props.pokemon.weight} kilograms</span></p>
          </div>


        </div>

        {props.pokemon.stats.map((item, index) => {
       
          return (
            <div className='flex justify-start items-center'>
              <div className='w-full mr-5 relative'>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center text-lg font-semibold uppercase '>{item.stat.name}</p>
                <progress className="w-full h-8 mr-5 rounded-full" value={item.base_stat} max={120}></progress>
              </div>
              <p className='text-white uppercase font-bold'>{item.base_stat}</p>
            </div>
          )
        })}

        <div>
          <h1 className='text-white text-3xl mt-3'>Skills</h1>
          {props.pokemon.abilities.map((item, index) => {
            return (
              <TagAbility abilities={item} setActiveAbilitySelect={setActiveAbilitySelect} />
            )
          })}

        </div>


        <div>
          {activeAbilitySelect.map((item, index) => {
            return (
              <div className='border my-2 p-3'>
                <p className='text-white'>{item.short_effect}</p>
              </div>
            )
          })}
        </div>

        <h1 className='text-white text-3xl mt-3'>Family</h1>
        <div className='flex max-w-full flex-wrap'>
          {pokemonsFamily ? (
            pokemonsFamily.length > 0 ? (
              pokemonsFamily.map((item, index) => (
                <img key={index} className='w-32' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} />
              ))
            ) : (
              <p className='text-black text-2xl opacity-65'>This Pokémon has no evolutions</p>
            )
          ) : (
            <p className='text-black text-2xl opacity-65'>Carregando...</p>
          )}
        </div>

        <StrendWorg pokemon={props.pokemon}/>

        <img src={ImageClose} onClick={() => closeModal()} className='absolute right-3 top-3 rounded-full cursor-pointer' />
      </div>

    
    </div>
  )
}
