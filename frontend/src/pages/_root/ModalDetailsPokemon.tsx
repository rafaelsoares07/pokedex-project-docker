import React from 'react'

export default function ModalDetailsPokemon(props) {

  console.log(props.pokemon.stats)
  return (
    <div className='fixed inset-x-36 inset-y-36 z-10 border-gray-900 border bg-white rounded-xl min-h-min p-5'>

    
      <div className='grid grid-rows-3 grid-cols-3 gap-5'>
        <img
          className='cursor-pointer row-span-3'
          src={
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`
          }
        />
        <p className='text-2xl text-center md:text-4xl  col-span-2 flex justify-center items-center'>{props.pokemon.name}</p>
        <div className='row-span-2 col-span-2 flex'>
          <div>
          {props.pokemon.stats.map((item, index)=>{
            {console.log(item)}
            return(
            <div className='flex justify-start items-center'>
                <progress className='mr-5' id="file" value={item.base_stat} max="100"> {item.base_stat}</progress>
                <p>{item.stat.name}</p>
            </div>
            )
          })}
          </div>

          <p>dasdsadsas</p>
        </div>

        <button onClick={()=>props.setOpen(prev=>!prev)} className='bg-bug absolute right-5 -top-2 rounded-full h-10 w-10'>Close</button>
      </div>

    </div>
  )
}
