import Image from 'next/image'
import Link from 'next/link'
import Fundo from '../img/fundo.jpg'
import './styles/style-login.css'
import Nav from './components/nav'
import About from './components/about'
import { VscChevronRight } from "react-icons/vsc";


export default function Home() {
  return (
    <>
    <Nav />
    <div className='w-screen h-screen absolute'></div>
    <div id='body' className='w-screen h-screen'></div>
    <div className='w-2/3 h-11 absolute bottom-48 left-5 mb-5'>
    <h1 className='font-bold text-white text-2xl'>Olá, este é meu portfólio!</h1>
    <p className='text-white text-sm mt-1'>
      Eu acredito que a fotografia é uma forma de arte que pode capturar e transmitir emoções e sentimentos, e é isso que eu tento fazer 
      em cada uma das minhas fotos.
      </p>
    </div>
    <button type='button' className='w-2/3 h-10 flex justify-center items-center gap-3 absolute bottom-5 left-5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-center'>
      Comece por aqui <VscChevronRight className='mt-0' />
    </button>
    <About />
    </>
  )
}