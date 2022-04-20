import React from 'react'
import { RiFacebookCircleFill, AiFillTwitterCircle, FiInstagram } from 'react-icons/all';

export default function Testimonial() {
    return (
        <div className='my-2'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <span className='font-bold text-black text-2xl'>What People Say About Us</span>
                <div className="line h-0.5 my-1 w-16 bg-blue-800"></div>
            </div>

            <div className='bg-white h-auto m-12 py-8 md:mx-36 '>

                <div className='flex justify-between'>
                    <div className='rounded-lg '>
                        <img className='h-36 w-36 rounded-lg relative right-6' src='https://qph.cf2.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg' alt="" />
                    </div>
                    <div className='rounded-lg '>
                        <img className='h-36 w-36 rounded-lg relative left-6' src='https://qph.cf2.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg' alt="" />
                    </div>
                </div>
                <div className='px-20 pb-14 mt-24'>
                    <div className='relative text-blue-700 text-2xl top-11 z-50 right-2'>
                        <AiFillTwitterCircle />
                    </div>
                    {/* <div className='flex justify-center items-center'>

                      
                        {/* <div role="tooltip" className="py-2 px-10 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  tooltip dark:bg-white">
                            Tooltip content
                            <div className="tooltip-arrow" data-popper-arrow>
                            </div>
                        </div> */}
                    
                    <div className='border-4 bg-clip-border border-gray-300 bg-gray-200 drop-shadow-xl h-44 my-7' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 20% 75%, 12% 84%, 9% 75%, 0% 75%)' }}>

                        <p className='flex justify-center  mt-7     items-center'>
                            Just Convince MySelf that it's too late
                        </p>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <div className='rounded-lg '>
                        <img className='h-36 w-36 rounded-lg relative right-6' src='https://qph.cf2.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg' alt="" />
                    </div>
                    <div className='rounded-lg '>
                        <img className='h-36 w-36 rounded-lg relative left-6' src='https://qph.cf2.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg' alt="" />
                    </div>
                </div>

                <p className='text-lg mt-7 text-gray-700 flex justify-center items-center'>Connect With Us</p>
                <div className='flex justify-center items-center flex-row text-blue-900 space-x-3 pt-4'>
                    <RiFacebookCircleFill />
                    <AiFillTwitterCircle />
                    <FiInstagram />
                </div>
            </div>
        </div>
    )
}
