import React from 'react'
import { PiMagicWandFill } from "react-icons/pi";
import Card from './Card';

const Career = () => {

    const data =[
            {
                icon:PiMagicWandFill,
                title:"Product Design Intern",
                company:"smallcase",
                year:"Jul 2022 - Sep 2022",
    
            },
            {
                icon:PiMagicWandFill,
                title:"Design in Residence",
                company:"10KDesigners",
                year:"Jun 2020 - Aug 2020",
    
            },
            {
                icon:PiMagicWandFill,
                title:"Product Management Fellow",
                company:"NextLeap",
                year:"Jul 2022 - Sep 2022",
    
            },
            {
                icon:PiMagicWandFill,
                title:"Product Management Fellow",
                company:"NextLeap",
                year:"Jul 2022 - Sep 2023",
    
            }
        ]

  return (
    <div className='w-full mt-5 sm:w-1/2 lg:w-1/3'>
        {
            data.map((item,index)=>(
                <Card data={item} key={index}/>
            ))
        }
    
    </div>
  )
}

export default Career
