"use client";
import { signOut, useSession, signIn } from 'next-auth/react';

const SignIn = () => {
    const { data: session } = useSession();
    console.log(session);

  if (session && session.user){
    return(
        <>
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