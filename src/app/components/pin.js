 import Image from 'next/image'
 import test from '../../img/preview/prev3.jpg'

 export default function Pin({pinSize}){
    return(
        <div className={`pin ${pinSize}`}>
            <Image
             className='mainPic' 
             src={test} alt='imagem'/>
        </div>
    )
}