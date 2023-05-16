import Link from 'next/link'
import SignUp from './btn-login'


export default function Nav() {
    return(
        <div className='absolute z-20 right-5 flex items-center top-5'>
        <SignUp/>
        </div>
        //<button  type='button' className='w-1/3 h-10 absolute right-5 top-5 rounded-xl bg-red-600 hover:bg-red-700 text-white'>
       // </button>
    )
}