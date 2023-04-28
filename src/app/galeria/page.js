import Pin from '../components/pin'
import Link from 'next/link'
import { GoChevronLeft } from "react-icons/go";
import Data from '../components/data'

export default function Gallery() {
    return (
        <>
        <div className='sm:bg-stone-900 sm:flex sm:justify-center sm:w-screen sm:h-full'>
            <Link href="/"> <GoChevronLeft className='absolute z-50 text-pink-400 top-1 left-1 text-5xl sm:hidden' /></Link>
            <div className=' bg-stone-900 container'>

                {Data && Data.map((Data) => <Pin key={Data.id} pinSize={Data.size}
                    imgSrc={Data.imgSrc}
                    link={Data.link} />)}
            </div>
        </div>
        </>
    )
}