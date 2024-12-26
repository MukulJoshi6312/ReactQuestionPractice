import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import QuaAndAns from './QuaAndAns';


const data = [
    {title:"HTML/CSS",
        topics:["HTML Basic","Sementic HTML","Forms and validation"],
    },
    {title:"JavaScript",
        topics:["Intoduction to javascript","Fuctions","Scope","Closures","Callbacks"],
    },
    {title:"React JS",
        topics:["JSX","Functional Components","Class Components","Porps","State"],
    },
    {title:"Data Structures and Algorithms (DSA)",
        topics:["Arrays","Linked Lists","Stacks","Queues","Hash Tables","Trees","Graphs"],
    }
]

const Accordian = () => {

    const[openIndex,setOpenIndex] = useState(null);

    const handleToggle = (index)=>{
        setOpenIndex(openIndex === index ? null :index);
    }

  return (
    <div className='w-full h-content bg-black p-6 md:px-20 py-5'>
      <h1 className='text-white text-7xl md:text-[140px] lg:text-[170px] font-sans tracking-tighter  font-semibold'>Dominate.</h1>
      <h3 className='text-zinc-600 text-3xl  md:text-5xl lg:text-7xl tracking-tighter  font-sans font-semibold'>From Start To Victory</h3>

      <div className='mt-12 md:mt-32'>{
        data.map((item,index)=>(
            <QuaAndAns data={item} key={index+1}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            />
        ))
        }
      </div>
    </div>
  )
}

export default Accordian
