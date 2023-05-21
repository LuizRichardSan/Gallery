'use client'
import Image from 'next/image'
import Link from 'next/link'

import image1 from '../../img/preview/prev1.jpg'
import image2 from '../../img/preview/prev2.jpg'
import image3 from '../../img/preview/prev3.jpg'
import { useRef } from 'react'


const Slider = ({id}) => {
    const images = [image1, image2, image3]
    return(
        <>
            <div id={id} className='z-50 h-full flex sm:justify-center sm:w-screen'>
                <div id='btn-left' className='bg-tranparent w-3/6 h-96 absolute'></div>
                <div id='btn-right' className='bg-tranparent right-0 w-3/6 h-96 absolute'></div>
                {images.map((image, index) => (
                     <div className='h-4/6 w-80 px-3' key={index}>
                        <Image className=' w-full h-full rounded-xl' src={image} alt='text'/>
                    </div>
                ))}
            </div>
            <button type='button' className='absolute z-50 bg-pink-400 hover:bg-pink-500 text-white px-5 py-3 rounded-lg bottom-20 left-5 text-center sm:left-1/2'><Link href='/galeria'> Ver Mais</Link></button>
        </>
    )
}

export default Slider;