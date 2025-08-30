
import leftimg from './assets/images/desktop.jpg';
import leftimg2 from './assets/images/mobile.jpg';

function CardLeft(){
    return(
        <div className='h-full overflow-hidden '>
        <img src={leftimg} alt="Product Image" className='w-full h-full sm:hidden md:flex' />
        <img src={leftimg2} alt="Product Image" className='w-full h-full md:hidden sm:flex' />
        </div>
    )
}

export default CardLeft