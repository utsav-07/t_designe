import React from 'react'



function FeaturesRoundedDiv(props) {
    return (<div className='flex flex-col justify-center items-center mt-8'>
        <div className="rounded-full h-28 w-28 flex bg-blue-700 m-2">
            <div className='relative left-7 bottom-3 '>
                <img className='h-20' src={props.iconPath} alt="none"></img>


            </div>

        </div>
        <div className='w-20 h-14 bg-gray-400 rounded-3xl' style={{
            clipPath: 'ellipse(25% 3% at 50% 50%)'
        }} />
        <span className='text-sm font-font-semibold'>{props.about}</span>

    </div>);
}


export default function Features() {
    return (
        <div className='mt-8'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <span className='font-bold text-green-500 text-2xl'>Why Choose Us</span>
                <div className="line h-0.5 my-1 w-16 bg-blue-800"></div>
            </div>

            <FeaturesRoundedDiv iconPath={require('../Icons/phone.svg').default} about={'Free,Easy,andEssential'}></FeaturesRoundedDiv>
            <FeaturesRoundedDiv iconPath={require('../Icons/trophy.svg').default} about={'Earn Ponts and Get Rewards'}></FeaturesRoundedDiv>
            <FeaturesRoundedDiv iconPath={require('../Icons/phone.svg').default} about={'Free,Easy,andEssential'}></FeaturesRoundedDiv>

        </div>

    )
}
