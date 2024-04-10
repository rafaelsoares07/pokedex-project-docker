import React, { useEffect } from 'react'
import HomeContext from '../../context/HomeContext/HomeContext';

export default function TypesFilter(props) {

    const homeContext = React.useContext(HomeContext)

    const [selectedTypes, setSelectedTypes] = React.useState([])


    useEffect(()=>{
        if (selectedTypes.length>0) {
            const filterPokemons = homeContext.pokemons.filter((pokemon) => {
                return pokemon.types.some((typePokemon) => {
                    return selectedTypes.includes(typePokemon.type.name);
                });
            });
            console.log(filterPokemons)
            homeContext.setFilterPokemons(filterPokemons)
            homeContext.setFilterActivite(true)
        }
    },[selectedTypes])

    

        const handleSelectChange = (event) => {
            const options = event.target.options;
            const selectedValues = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedValues.push(options[i].value);
                }
            }
            setSelectedTypes(selectedValues);
        };

        return (
            <div>
                <div className='bg-gray-200 w-full h-10'>
                    {selectedTypes.map((item, index) => {
                        return (
                            <span>{item}</span>
                        )
                    })}
                </div>
                <select onChange={handleSelectChange} name="select" multiple>
                    {props.arrayTypes.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })}
                </select>

                <button onClick={()=>homeContext.setFilterActivite(false)}>Limpar Filtros</button>
            </div>
        )
    
}
