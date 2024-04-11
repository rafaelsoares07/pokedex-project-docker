import React, { useEffect } from 'react'
import HomeContext from '../../context/HomeContext/HomeContext';

import bug from "../../assets/types/bug.png";
import dark from "../../assets/types/dark.svg";
import dragon from "../../assets/types/dragon.png";
import electric from "../../assets/types/electric.svg";
import fairy from "../../assets/types/fairy.svg";
import fighting from "../../assets/types/fighting.svg";
import fire from "../../assets/types/fire.png";
import flying from "../../assets/types/flying.png";
import ghost from "../../assets/types/ghost.png";
import grass from "../../assets/types/grass.png";
import ground from "../../assets/types/ground.svg";
import ice from "../../assets/types/ice.svg";
import normal from "../../assets/types/normal.svg";
import poison from "../../assets/types/poison.svg";
import psychic from "../../assets/types/psychic.svg";
import rock from "../../assets/types/rock.svg";
import steel from "../../assets/types/steel.svg";
import water from "../../assets/types/water.svg";
import ImageTypeFilters from './ImageTypeFilters';


export default function TypesFilter(props) {

    const homeContext = React.useContext(HomeContext);

    const [selectedTypes, setSelectedTypes] = React.useState([]);
    const [activeTypes, setActiveTypes] = React.useState([]);
    const arrayTypes = [bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, normal, grass, ground, ice, poison, psychic, rock, steel, water];

    const[weigth, setWeigth] =  React.useState(0)
    

    useEffect(() => {

        let arrayFilter = [...homeContext.pokemons]

        if (selectedTypes.length > 0) {
            arrayFilter = arrayFilter.filter((pokemon) => {
                return pokemon.types.some((typePokemon) => {
                    console.log(typePokemon)
                    return selectedTypes.includes(typePokemon.type.name);
                });
            });
            console.log(arrayFilter)
            homeContext.setFilterActivite({...homeContext.filterActive, type:true});
        }
        if(weigth!=0){
            arrayFilter = arrayFilter.filter((pokemon) => {
                return pokemon.weight >= weigth
            });
            console.log(arrayFilter)
            homeContext.setFilterActivite({...homeContext.filterActive, weigth:true});
        }
        
        homeContext.setFilterPokemons(arrayFilter);

    }, [selectedTypes, weigth]);

    const handleTypeClick = (type) => {
        if (activeTypes.includes(type)) {
            // Se o tipo clicado já estiver ativo, desative-o
            setSelectedTypes(selectedTypes.filter(t => t !== type));
            setActiveTypes(activeTypes.filter(t => t !== type));
        } else {
            // Se não, ative-o
            setSelectedTypes([...selectedTypes, type]);
            setActiveTypes([...activeTypes, type]);
        }
    
    };

    const handleClearFilters = () => {
        setSelectedTypes([]);
        setActiveTypes([]);
    };

    // console.log(activeTypes)
    // console.log(arrayTypes)

    const formatUrlType = (url) => {
        const texto = url.split("/")[url.split("/").length - 1];
        return texto.split(".")[0];
    };

    return (
        <div>
            <div className='flex flex-wrap gap-1 justify-center'>
                {arrayTypes.map((item, index) => {
                    return (
                        <ImageTypeFilters
                            key={index}
                            item={item}
                            onClickFunction={() => handleTypeClick(formatUrlType(item))}
                            active={activeTypes.includes(formatUrlType(item))}
                        />
                    );
                })}
            </div>
            <input onChange={(event)=> setWeigth(event?.target.value)} value={weigth} type="number" name="" id="" />
            <button onClick={handleClearFilters}>Limpar Filtros</button>
        </div>
    );
}