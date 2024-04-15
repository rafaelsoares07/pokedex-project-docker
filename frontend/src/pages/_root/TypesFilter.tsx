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

    const arrayWeigth = [{ name: "Leve", min: 0, max: 100 }, { name: "Medio", min: 100, max: 500 }, { name: "Pesado", min: 500, max: 100000 }]

    const arrayHeigth = [{ name: "Baixo", min: 0, max: 10 }, { name: "Medio", min: 11, max: 20 }, { name: "Alto", min: 21, max: 100 }]

    const arrayGerations = [{name:"1 Geracao", start:1, end:151}, {name:"2 Geracao", start:152, end:251}, {name:"3 Geracao", start:252, end:386}]

    const [weigth, setWeigth] = React.useState(0)

    const [heigth, setHeigth] = React.useState(0)

    const [geration, setGerantion] = React.useState(0)

    const [intervalLength, setIntervalLength] = React.useState({ start: 0, end: 0 })


    useEffect(() => {

        let arrayFilter = [...homeContext.pokemons]

        if (selectedTypes.length > 0) {
            arrayFilter = arrayFilter.filter((pokemon) => {
                return pokemon.types.some((typePokemon) => {

                    return selectedTypes.includes(typePokemon.type.name);
                });
            });

            homeContext.setFilterActivite(prevState => ({ ...prevState, type: true }));
        }
        else {

            homeContext.setFilterActivite(prevState => ({ ...prevState, type: false }));
        }

        if (weigth != 0) {
            arrayFilter = arrayFilter.filter((pokemon) => {
                return pokemon.weight >= weigth.min && pokemon.weight <= weigth.max
            });

            homeContext.setFilterActivite(prevState => ({ ...prevState, weigth: true }));
        }
        else {
            homeContext.setFilterActivite(prevState => ({ ...prevState, weigth: false }));
        }

        if (heigth != 0) {
            arrayFilter = arrayFilter.filter((pokemon) => {

                return pokemon.height >= heigth.min && pokemon.height <= heigth.max
            })
            homeContext.setFilterActivite(prevState => ({ ...prevState, heigth: true }));
        }
        else {
            homeContext.setFilterActivite(prevState => ({ ...prevState, heigth: false }));
        }

        if (geration != 0) {
            arrayFilter = arrayFilter.filter((pokemon) => {

                return pokemon.id >= geration.start && pokemon.id <= geration.end
            })
            homeContext.setFilterActivite(prevState => ({ ...prevState, geration: true }));
        }
        else {
            homeContext.setFilterActivite(prevState => ({ ...prevState, geration: false }));
        }

       
        if ((intervalLength.start != 0 || intervalLength.end != 0) && (intervalLength.start < intervalLength.end )) {
            console.log("ENTROU NO FILTRO")
            arrayFilter = arrayFilter.filter((pokemon) => {

                return pokemon.id >= intervalLength.start && pokemon.id <= intervalLength.end
            })
            homeContext.setFilterActivite(prevState => ({ ...prevState, interval: true }));
        } 
        else if (intervalLength.start!=0 && intervalLength.end==0) {
            arrayFilter = arrayFilter.filter((pokemon) => {

                return pokemon.id >= intervalLength.start
            })
            homeContext.setFilterActivite(prevState => ({ ...prevState, interval: true }));
        }
        else if (intervalLength.start==0 && intervalLength.end!=0) {
            arrayFilter = arrayFilter.filter((pokemon) => {

                return pokemon.id <= intervalLength.end
            })
            homeContext.setFilterActivite(prevState => ({ ...prevState, interval: true }));
        }
        else {
            homeContext.setFilterActivite(prevState => ({ ...prevState, interval: false }));
        }

        homeContext.setFilterPokemons(arrayFilter);

    }, [selectedTypes, weigth, heigth,intervalLength,geration, homeContext.pokemons]);

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
        setWeigth(0)
        setHeigth(0)
        setIntervalLength({start:0, end:0})
        setGerantion(0)

        homeContext.setFilterActivite({ ...homeContext.filterActive, type: false });
        homeContext.setFilterActivite({ ...homeContext.filterActive, heigth: false });
        homeContext.setFilterActivite({ ...homeContext.filterActive, weigth: false });
        homeContext.setFilterActivite({ ...homeContext.filterActive, interval: false });
        homeContext.setFilterActivite({ ...homeContext.filterActive, geration: false });
       
    };



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

            <div className=' flex justify-start '>
                {arrayWeigth.map((item, index) => {
                    return (
                        <div className={`p-5 border ${weigth.name == item.name?'bg-blue-500':null}`} onClick={() => setWeigth(item)}>{item.name}</div>
                    )
                })}
            </div>

            <div className=' flex justify-start '>
                {arrayHeigth.map((item, index) => {
                    return (
                        <div className={`p-5 border ${heigth.name == item.name?'bg-blue-500':null}`} onClick={() => setHeigth(item)}>{item.name}</div>
                    )
                })}
            </div>

            <div className=' flex justify-start '>
                {arrayGerations.map((item, index) => {
                    return (
                        <div className={`p-5 border ${geration.name == item.name?'bg-blue-500':null}`} onClick={() => setGerantion(item)}>{item.name}</div>
                    )
                })}
            </div>

            <div className='flex gap-5'>
                <input
                    onChange={(event) => {
                        setIntervalLength((prev) => ({ ...prev, start: Number(event.target.value) }))
                    }}
                    className="w-20 h-10"
                    type="number"
                    name="start"
                />
                <input
                    onChange={(event) => {
                        setIntervalLength((prev) => ({ ...prev, end: Number(event.target.value) }))
                    }}
                    className="w-20 h-10"
                    type="number"
                    name="end"
                />
            </div>


            <button onClick={handleClearFilters}>Limpar Filtros</button>
        </div>
    );
}