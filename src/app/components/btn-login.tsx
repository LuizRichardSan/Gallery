"use client";
import { signOut, useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

const SignIn = () => {
    const { data: session } = useSession();
    console.log(session);

  if (session && session.user){
    return(
        <>
        <button type='button' className='w-44 h-10 mr-5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white'>
           <Link href={'/adicionar'}>Adicionar Imagem</Link>  
        </button>
        <button onClick={()=>signOut()} type='button' className='w-20 h-10 rounded-xl bg-pink-600 hover:bg-pink-700 text-white'>
            Sair
        </button>
        </>
    )
    }

    return(
        
        <button type='button' onClick={() => signIn()} className='w-20 h-10 rounded-xl bg-pink-600 hover:bg-pink-700 text-white'>
            Entrar
        </button>

    )
}


export default SignIn;