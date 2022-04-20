import { Button } from '@mui/material'
import React from 'react'


function AboutCard(props) {
    return (<div className=" flex flex-row justify-between bg-white   my-7 ">
        <div className="w-1/2 " style={{ display: props.hiddenl }}>
            <img className='rounded-r-full h-full' style={{width : '350px'}} src='https://blog.hubspot.com/hubfs/small-business-ideas.jpg' alt="" />
        </div>
        <div className="flex flex-col pt-4 ml-6 space-y-2 md:pr-10 w-1/2 justify-between">

            <p className="text-lg text-black font-bold ">

                {props.head}
            </p>
            <p className='text-gray-600'>Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration. </p>
            <div className='pb-7 '>

                <Button size='small' className=' ' variant="outlined">Learn More</Button>
            </div>


        </div>
        <div className="" style={{ display: props.hiddenr }}>
            <img className='rounded-l-full h-full'  style={{width : '350px'}}  src='https://blog.hubspot.com/hubfs/small-business-ideas.jpg' alt="" />
        </div>
    </div>);
}


export default function AboutUs() {
    return (
        <div className='py-3'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <span className='font-bold text-green-500 text-2xl'>Get to know us</span>
                <div className="line h-0.5 my-1 w-16 bg-blue-800"></div>
            </div>
            <div className='px-0 md:px-20 xl:px-32'>
                <AboutCard hiddenr={'none'} head={'For Local Business'}></AboutCard>
                <AboutCard hiddenl={'none'} head={'About Us'}></AboutCard>
                <AboutCard hiddenr={'none'} head={'Delivery Points'}></AboutCard>
            </div>
        </div>
    )
}
