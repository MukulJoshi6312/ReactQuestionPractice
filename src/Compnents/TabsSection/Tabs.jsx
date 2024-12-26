import React from 'react'
import { useState } from 'react'
import { GrNotes } from "react-icons/gr";
import { PiMagicWandFill } from "react-icons/pi";
import Education from './Education';
import Career from './Career';

const Tabs = () => {
    const [selectTab, setSelectTab] = useState('education')

    const handleTabChange = (tab) => {
        setSelectTab(tab)
    }
    return (
        <div className='main bg-zinc-900 w-full h-content mb-10 lg:h-screen flex items-center flex-col px-6'>
            <h1 className='text-6xl font-semibold font-sans text-center py-12 text-[rgb(153,153,153)]'>Educations and career</h1>
            <div className='w-full sm:w-1/2 lg:w-1/3 flex justify-around items-center text-md rounded-3xl p-1  text-[#999]  bg-zinc-800 gap-3'>
                <div className={`flex items-center gap-2 hover:text-white transition-all duration-300 ease-in-out cursor-pointer w-1/2 justify-center py-2 rounded-3xl ${selectTab === 'education' ? "bg-zinc-900 text-white" : ""}`} onClick={() => handleTabChange('education')}>
                    <GrNotes className='text-md' />
                    <p className='hover:text-white transition-all duration-300 ease-in-out'>Educations</p>
                </div>

                <div className={`flex items-center gap-2 hover:text-white transition-all duration-300 ease-in-out cursor-pointer w-1/2  justify-center py-2 rounded-3xl ${selectTab === 'career' ? "bg-zinc-900 text-white" : ""}`} onClick={() => handleTabChange('career')}>
                    <PiMagicWandFill className='text-md' />
                    <p>Career</p>
                </div>
            </div>

            {
                selectTab === 'education' ? <Education /> : <Career />
            }
        </div>
    )
}

export default Tabs
