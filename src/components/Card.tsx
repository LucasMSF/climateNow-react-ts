import React from 'react'
import { climateData } from '../types/types'

type Props = {
    data: climateData
}

const Card = ({data: {location, current}}: Props) => {
    return (
        <div className='w-[320px] bg-white p-6 mt-8 shadow-2xl'>
            <div className='text-center'>
                <span className='block text-xl font-bold text-slate-700'>{location.name}</span>
                <span className='text-sm font-bold text-slate-500'>{`${location.region}, ${location.country}`}</span>
            </div>
            <div className='text-center flex justify-center font-bold text-slate-700 mt-2 mb-2'>
                <span className='text-7xl'>{current.temp_c}</span>
                <span className='text-2xl mt-2'>C°</span>
            </div>
            <div className='text-center flex flex-col justify-center items-center'>
                <img className='w-45 h-45' src={current.condition.icon}></img>
                <span className='text-lg font-bold text-slate-500' >{current.condition.text}</span>
            </div>
        </div>
    )
}

export default Card