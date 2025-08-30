
import { TiShoppingCart } from "react-icons/ti";


function CardRight(){
    return(
        <div className="flex flex-col gap-5 h-auto bg-White px-6 pt-5 pb-6">
            <h2 className="uppercase font-secondary text-Grey">PERFUME</h2>
            <h1 className="font-primary text-3xl text-Black">Gabrielle Essence Eau De Parfum</h1>
            <p className="text-Grey">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.</p>
            <div className="flex flex-row gap-4">
                <h1 className="text-Green-500 text-2xl font-primary">$149.99</h1>
                <p className="line-through mt-[3px] text-Grey">$169.99</p>
            </div>
            <div className="text-center flex items-center justify-center w-full">
                <button className="w-full flex items-center justify-center gap-2 font-bold hover:bg-Green-700 transition-all duration-500 bg-Green-500 text-center text-White p-2 border-none rounded-lg"> <TiShoppingCart />Add to Cart</button>
            </div>
        </div>
        )
}

export default CardRight