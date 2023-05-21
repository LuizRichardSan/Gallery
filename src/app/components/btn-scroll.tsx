'use client'
import { useRef } from "react";
import { VscChevronRight } from "react-icons/vsc";
import {Link} from 'react-scroll/modules'



const BtnScroll = () => {
    return(
        <button type='button' className='w-2/3 h-10  absolute bottom-5 left-5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-center sm:w-52'>
         <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
         <div className='flex justify-center items-center gap-3'> Comece por aqui <VscChevronRight className='mt-0' /> </div> 
        </Link>
        </button>
    )
}

export default BtnScroll;
