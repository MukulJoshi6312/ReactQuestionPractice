import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const QuaAndAns = ({ data,isOpen,onClick }) => {
    // const [isOpen, setIsOpen] = useState(false); // State to toggle visibility

    // const toggleAccordion = () => {
    //     setIsOpen(!isOpen); // Toggle the open state
    // };

    return (
        <div>
            <hr className="w-full h-1 border-zinc-600" />
            <div className="card">
                {/* Question Section */}
                <div
                    className="question text-white flex items-center justify-between py-6 cursor-pointer"
                    onClick={onClick} // if i want to used open one accordion at a time then we can use parent class click hndler insted of using this class click hanlder
                >
                    <div className="title text-lg md:text-2xl lg:text-4xl">{data.title}</div>
                    <div className="flex items-center gap-3">
                        {isOpen ? "Collapse" : "Expand"}
                        <IoIosArrowDown
                            className={`transform transition-transform duration-500 ${
                                isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </div>
                </div>

                {/* Answer Section */}
                <div
                    className={`answer overflow-hidden transition-all duration-500 ease-in-out mb-5 ${
                        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    {data.topics.map((item, index) => (
                        <h4
                            key={index + 1}
                            className="text-zinc-600 ml-6 text-md md:text-lg transition-opacity duration-500 ease-in-out"
                        >
                            {item}
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuaAndAns;
