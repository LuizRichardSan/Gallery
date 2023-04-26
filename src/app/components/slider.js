import Image from 'next/image'
import image1 from '../../img/preview/prev1.jpg'
import image2 from '../../img/preview/prev2.jpg'
import image3 from '../../img/preview/prev3.jpg'


export default function Slider(){
    const images = [image1, image2, image3]
    return(
        <>
            <div className='z-50 h-full flex'>
                <div id='btn-left' className='bg-tranparent w-3/6 h-96 absolute'></div>
                <div id='btn-right' className='bg-tranparent right-0 w-3/6 h-96 absolute'></div>
                {images.map(image => (
                    <div className='h-4/6 w-80 px-3' key={image}>
                        <Image className=' w-full h-full rounded-xl' src={image} alt='text'/>
                    </div>
                ))}
            </div>
            <button type='button' className='absolute z-50 bg-pink-400 hover:bg-pink-500 text-white px-5 py-3 rounded-lg bottom-20 left-5 text-center'>Ver Mais</button>
        </>
    )
}