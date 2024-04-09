import axios from 'axios'
import React, { useEffect } from 'react'

export default function TagAbility(props) {
    const [abilityDetails, setAbilityDetails] = React.useState({})

    React.useEffect(() => {
        async function fetchData() {
            const response = await axios.get(props.abilities.ability.url)
          
            setAbilityDetails(response.data)
        }
        fetchData()
    }, [])

    return (
        <button onClick={()=> props.setActiveAbilitySelect(abilityDetails.effect_entries)} className=" relative px-3 py-1 m-1 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 ">
            <span className="text-sm">{abilityDetails.name}</span>
        </button>
    )
}
