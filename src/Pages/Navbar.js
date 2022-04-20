import { Button } from '@mui/material'
import React from 'react'
import { ImSpoonKnife, ImGlass2, BsBasket, GiWashingMachine, FaLocationArrow } from 'react-icons/all';
import { RoundedDivWithIcon } from '../Components/RoundedDivWithIcon';




export default function Navbar() {
    return (
        <>
            <div className='flex flex-row justify-between px-5 py-4'>
                <div>
                    <div className="line h-0.5 my-1 w-6 bg-blue-800"></div>
                    <div className="line h-0.5 my-1 w-6 bg-blue-800"></div>
                    <div className="line h-0.5 my-1 w-6 bg-blue-800"></div>
                </div>

                <Button variant='outlined'>Log in</Button>

            </div>


            <div className='m-24 flex flex-col justify-center items-center'>

                <p className='text-center  text-2xl text-red-600'>market<p className='inline-block font-semibold'>OD</p>.com</p>
                <div className='flex flex-row justify-center my-5'>
                    <RoundedDivWithIcon icon={<ImSpoonKnife />}></RoundedDivWithIcon>
                    <RoundedDivWithIcon icon={<ImGlass2 />}></RoundedDivWithIcon>
                    <RoundedDivWithIcon icon={<BsBasket />}></RoundedDivWithIcon>
                    <RoundedDivWithIcon icon={<GiWashingMachine />}></RoundedDivWithIcon>


                </div>
                <div>
                    <p className='text-blue-800 text-lg'>Shops , Services and more</p>
                    <p className='flex justify-center items-center text-lg text-blue-800'>Come to your door</p>
                </div>


                <div className='relative '>
                    <div class="absolute top-6 left-3 text-blue-700 "><FaLocationArrow /></div>
                    <input type="text" className="border-2 text-s border-gray-400 focus-shadow ring-gray-400 rounded-md  m-2  p-7 xsm:w-96 w-60 py-2 " placeholder="Street Address , City , State"></input>
                </div>
                <div >

                    <Button variant="contained" className='xsm:w-96 w-60'>Search</Button>
                </div>

            </div>
            

        </>
    )
}
