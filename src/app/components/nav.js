import Link from 'next/link'


export default function Nav() {
    return(
        <div className='absolute z-20 right-5 top-5'>
        <button type='button' className='w-20 h-10 rounded-xl bg-pink-600 hover:bg-pink-700 text-white'>
            <Link href="/login">Entrar</Link>
        </button>
        </div>
        //<button  type='button' className='w-1/3 h-10 absolute right-5 top-5 rounded-xl bg-red-600 hover:bg-red-700 text-white'>
       // </button>
    )
}