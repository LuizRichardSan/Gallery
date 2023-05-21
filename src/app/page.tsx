import Image from 'next/image'
import Fundo from '../img/fundo.jpg'
import './styles/style-login.css'
import Nav from './components/nav'
import About from './components/about'
import BtnScroll from './components/btn-scroll'
import Slider from './components/slider'
import { Link } from "react-scroll/modules"


export default function Home() {
  return (
    <>
    <Nav/>
    <div className='w-screen h-screen absolute'></div>
    <div id='body' className='w-screen h-screen'></div>
    <div className='w-2/3 h-11 absolute bottom-48 left-5 mb-5'>
    <h1 className='font-bold text-white text-2xl sm:text-4xl'>Olá, este é meu portfólio!</h1>
    <p className='text-white text-sm mt-1 sm:text-xl'>
      Eu acredito que a fotografia é uma forma de arte que pode capturar e transmitir emoções e sentimentos, e é isso que eu tento fazer 
      em cada uma das minhas fotos.
      </p>
    </div>
    <BtnScroll />
    <About><Slider id={'test1'}/></About>
    </>
  )
}