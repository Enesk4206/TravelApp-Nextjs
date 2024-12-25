import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    date: string;
}

const NewCard = ({image, title, date}: Props) => {
    return (
        <div>
            {/* Image */}
            <div className='h-[300px]'>
                <Image src={image} alt='News image' width={300} height={300} className='size-full object-cover rounded-lg'/>
            </div >
            {/* Text Content */}
            <div>
                <h1 className='mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h1>
                <p className='text-sm text-gray-600 mt-3'>{date}</p>
            </div>
            
        </div>
       
  )
}

export default NewCard