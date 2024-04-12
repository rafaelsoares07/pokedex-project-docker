import React from 'react'
import TypesFilter from './TypesFilter'

export default function SideMenu(props) {

    const a = props.openSideMenu?"":"hidden"

  return (
    <div className={` ${a} fixed right-0 bg-gray-100 z-50 h-screen w-4/6 md:w-1/2`}>
        <button className='h-36 w-36 bg-fairy' onClick={()=> props.setOpenSideMenu(!props.openSideMenu)}>Fechar</button>
        <TypesFilter arrayTypes={props.arrayTypes}/>
    </div>
  )
}
