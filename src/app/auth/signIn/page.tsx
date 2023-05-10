'use client'
import Image from 'next/image'
import Link from 'next/link'
import '../../styles/style-login.css'
import LoginBtn from '../../components/loginbtn';
import TextBox from '../../components/form';
import { GoChevronLeft } from "react-icons/go";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center'>
     <Link href="/"> <GoChevronLeft className='absolute text-pink-400 top-1 left-1 text-5xl sm:hidden'/></Link>
      <div className='w-5/6 h-5/6 sm:w-80 flex flex-col justify-around'>
        <div className='w-full text-left'>
          <h1 className='text-stone-900 text-3xl'>Bem-vindo,</h1>
          <p className='text-gray-600 text-2xl'>Login para continuar!</p>
        </div>
        <div className='h-56 flex flex-col gap-5'>
        <TextBox lableText="User Name" onChange={(e) => (userName.current = e.target.value)} />
        <TextBox
          lableText="Senha"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
          <LoginBtn onClick={onSubmit}>Entre</LoginBtn>
          </div>
        <p className='text-center'>Área de Administração</p>
      </div>

    </div>
    
    </>
  )
}

export default LoginPage;
