import React from 'react'
import ImageClose from '../../assets/cruz.png'
import TagAbility from './TagAbility'
export default function ModalDetailsPokemon(props) {

  const [activeAbilitySelect, setActiveAbilitySelect] = React.useState([])

  console.log(activeAbilitySelect)
  
  return (
    <div className='overflow-y-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-5/6 z-10 border-gray-900 border bg-slate-700 rounded-xl p-5'>

      <div className='grid grid-rows-3 grid-cols-3 gap-5'>

        <img className='cursor-pointer row-span-2' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`} />

        <div className='row-span-2 col-span-2 flex flex-col items-center '>
          <p className='text-2xl md:text-7xl text-white'>{props.pokemon.name}</p>
          <div className='self-start'>
            <p className='text-white text-xl my-2'>Heigth: <span>{props.pokemon.height < 10 ? `0.${props.pokemon.height}` : props.pokemon.height} meters</span></p>
            <p className='text-white text-xl my-2'>Weigth: <span>{props.pokemon.weight} kilograms</span></p>
          </div>
          <div className='w-full'>
            {props.pokemon.stats.map((item, index) => {
              // { console.log(item) }
              return (
                <div className='flex justify-start items-center'>
                  <div className='w-3/4 mr-5 relative'>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold'>{item.base_stat}</p>
                    <progress className="w-full h-8 mr-5 rounded-full" value={item.base_stat} max={100}></progress>
                  </div>
                  <p className='text-white uppercase font-bold'>{item.stat.name}</p>
                </div>
              )
            })}
          </div>

        </div>

        <div className='col-span-3 flex'>
          <div className='basis-2/5'>
            <h1 className='text-white text-3xl'>Abilities</h1>
            <div className='flex flex-wrap'>
              {props.pokemon.abilities.map((item, index) => {
                return (
                  <TagAbility abilities={item} setActiveAbilitySelect={setActiveAbilitySelect} />
                )
              })}
            </div>

            <div>
              {activeAbilitySelect.map((item, index)=>{
                return(
                  <div className='border my-2 p-3'>
                    <p className='text-white'>{item.short_effect}</p>
                  </div>
                )
              })}
            </div>

          </div>

          <div className='basis-3/4'>
            <h1 className='text-white text-3xl'>Family</h1>
          </div>
          
        </div>

        <img src={ImageClose} onClick={() => props.setOpen(prev => !prev)} className='absolute right-3 top-3 rounded-full cursor-pointer' />
      </div>



    </div>
  )
}
