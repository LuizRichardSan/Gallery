import Image from 'next/image'
import Foto from '../../img/icon.png'
import Slider from '../components/slider'


export default function About(){
    return(
        <section id='about' className='w-screen h-128  bg-gradient-to-b from-stone-900 to-stone-800'>
    <div className="w-screen h-32 px-11 flex justify-around items-center">
        <Image src={Foto} className='w-24 h-24 mt-10 rounded-full' alt='Icone da foto'/>
        <div className="flex flex-col mt-10">
        <h2 className="font-bold text-center text-pink-400 text-xl ">3</h2>
        <p className='text-pink-400 text-xl'>Fotos</p>
        </div>
    </div>
    <div className=' h-20 border-b border-pink-400 mx-10'>
    <h2 className='text-pink-400 text-center mt-10 font-bold text-xl'>Mellyssa Marcelino</h2>
    </div>
    <div className='relative h-2/3 mt-5 flex shrink-0 curso-grab overflow-x-auto max-w-screen'>
        <Slider/>
    </div>
    </section>
    )
}