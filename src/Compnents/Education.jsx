import React from 'react'
import Card from './Card'
import { GrNotes } from "react-icons/gr";


const Education = () => {
    const data =[
        {
            icon:GrNotes,
            title:"Product Management Fellow",
            company:"NextLeap",
            year:"Jul 2022 - Sep 2022",

        },
        {
            icon:GrNotes,
            title:"Design in Residence",
            company:"10KDesigners",
            year:"Jun 2020 - Aug 2020",

        },
        {
            icon:GrNotes,
            title:"Product Management Fellow",
            company:"NextLeap",
            year:"Jul 2022 - Sep 2022",

        },
        {
            icon:GrNotes,
            title:"Product Management Fellow",
            company:"NextLeap",
            year:"Jul 2022 - Sep 2024",

        }
        
        
    ]
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3  mt-5'>
     {/* <Card data={data}/> */}
     {
        data.map((item,index)=>(
            <Card data={item} key={index}/>
        ))
     }
    </div>
  )
}

export default Education
