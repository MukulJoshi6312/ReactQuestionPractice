import React from 'react'
import { GrNotes } from "react-icons/gr";

const Card = ({data}) => {
    const Icon = data.icon;
  return (
    <div className='flex flex-col mt-5'>
     <div className='flex items-start justify-start gap-3 p-4 bg-zinc-800 rounded-3xl'>
        {<Icon className='mt-1 text-white'/>}
        <div>
        <h5 className='text-white'>{data.title}</h5>
        <p className='text-zinc-400 text-sm'>{data.company}</p>
        <p className='text-[12px] text-zinc-600'>{data.year}</p>
        </div>
     </div>
    </div>
  )
}

export default Card
