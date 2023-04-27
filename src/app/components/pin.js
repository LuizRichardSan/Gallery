 import Image from 'next/image'
 import test from '../../img/preview/prev3.jpg'

 export default function Pin({pinSize, imgSrc, link}){
    return(
        <div className={`pin ${pinSize}`}>
            <Image
             className='mainPic' 
             src={imgSrc} alt='imagem'
             />
        </div>
    )
}