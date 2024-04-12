import React, { useContext } from 'react'
import HomeContext from '../../context/HomeContext/HomeContext';
import ModalDetailsPokemon from './ModalDetailsPokemon';


export default function CardPokemon(props) {

 
    const [statusVisible, setStatusVisible] = React.useState(props.visibility)

    function openModalDetailPokemon() {
        props.setOpen(prev => !prev)
        props.setPokemonDetail(props.pokemon)
    }

    let visibilityPokemons =
        props.visibility ?
            null
            :
            "filter brightness-0 grayscale hover:brightness-100 hover:invert-0 hover:grayscale-0"
    
 

    return (
        <div className='flex flex-col items-center'>

            {visibilityPokemons ? null: <p className='self-start opacity-50 text-2xl ml-5 mt-3'>#00{props.pokemon.id}</p>}
            

            <img
            // onMouseEnter={()=>setStatusVisible(true)}
            // onMouseLeave={()=>setStatusVisible(false)}
                className={`${visibilityPokemons} hover:scale-110 cursor-pointer`}
                onClick={() => openModalDetailPokemon()}
                src={
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`
                }
            />
            {visibilityPokemons ? null : <p className='text-2xl text-center md:text-4xl'>{props.pokemon.name}</p>}


            {visibilityPokemons ?
                null
                :
                <div className='py-5 flex justify-center gap-5'>
                    {props.pokemon.types.map((el: any, index: any) => <TagType key={index} type={el.type.name} />)}
                </div>
            }


        </div>
    )
}

function TagType({ type }) {

    const colorClasses = {
        bug: 'bg-bug',
        dark: 'bg-dark',
        dragon: 'bg-dragon',
        electric: 'bg-electric',
        fairy: 'bg-fairy',
        fighting: 'bg-fighting',
        fire: 'bg-fire',
        flying: 'bg-flying',
        ghost: 'bg-ghost',
        normal: 'bg-normal',
        grass: 'bg-grass',
        ground: 'bg-ground',
        ice: 'bg-ice',
        poison: 'bg-poison',
        psychic: 'bg-psychic',
        rock: 'bg-rock',
        steel: 'bg-steel',
        water: 'bg-water'
    };

    return (
        <p className={`${colorClasses[type]} text-white py-1 px-2 hover:opacity-65 hover:scale-105 cursor-pointer`}>{type}</p>
    )
}
