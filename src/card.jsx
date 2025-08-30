import CardLeft from "./cardLeft.jsx";
import CardRight from "./cardRight";

function Card(){


    return(
        <div>
            <div className="mt-5 mb-5 flex sm:flex-col md:flex-row sm:max-w-[300px] md:max-w-[500px] h-contain border border-none shadow-lg overflow-hidden rounded-2xl">
                <div className="flex-1">
                    <CardLeft />
                </div>
                <div className="flex-1">
                    <CardRight />
                </div>
            </div>
        </div>
    )
}

export default Card