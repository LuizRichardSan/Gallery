import Image from 'next/image'
import Link from 'next/link'
import '../styles/style-login.css'
import { GoChevronLeft } from "react-icons/go";

export default function Login() {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center'>
     <Link href="/"> <GoChevronLeft className='absolute text-pink-400 top-1 left-1 text-5xl'/></Link>
      <div className='w-5/6 h-5/6 flex flex-col justify-around'>
        <div className='w-full text-left'>
          <h1 className='text-stone-900 text-3xl'>Bem-vindo,</h1>
          <p className='text-gray-600 text-2xl'>Login para continuar!</p>
        </div>
        <form className='h-56 flex flex-col gap-5'>
          <div className='flex flex-col text-gray-600'>
            <label for="email" >Id de Usuário</label>
            <input required className='h-11' type='text' name='user' placeholder='Seu Id'>
            </input>
          </div>
          <div className='flex flex-col text-gray-600'>
            <label className='flex flex-col text-gray-600'>Senha</label>
            <input required className='h-11 ' type='password' name='password' placeholder='Sua senha'>
            </input>
          </div>
          <button className='h-16 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold shadow-xl' type='submit'>Entrar</button>
        </form>
        <p className='text-center'>Área de Administração</p>
      </div>

    </div>
    
    </>
  )
}

