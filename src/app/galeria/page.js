import Pin from '../components/pin'

export default function Gallery(){
    return(
    <>
        <div className='h-5/6 bg-red-900 px-10 mt-10 grid grid-cols-2 auto-rows-min'>
        <Pin pinSize = {'small'} />
        <Pin pinSize = {'medium'} />
        <Pin pinSize = {'large'} />
        </div>
    </>
    )
}