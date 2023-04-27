import Pin from '../components/pin'
import Link from 'next/link'
import { GoChevronLeft } from "react-icons/go";


export default function Gallery(){
    return(
    <>
        <Link href="/"> <GoChevronLeft className='absolute z-50 text-pink-400 top-1 left-1 text-5xl'/></Link>
        <div className=' bg-stone-900 container'>
        <Pin pinSize={"small"} />
        <Pin pinSize={"medium"} />
        <Pin pinSize={"large"} />
        <Pin pinSize={"small"} />
        <Pin pinSize={"medium"} />
        <Pin pinSize={"large"} />
        <Pin pinSize={"small"} />
        <Pin pinSize={"medium"} />
        <Pin pinSize={"large"} />

        </div>
    </>
    )
}