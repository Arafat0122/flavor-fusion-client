import { CiForkAndKnife, CiShoppingCart } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";


const SingleFood = () => {

    const foods = useLoaderData();

    const { _id, foodName, foodImage, foodCategory, price, quantity } = foods;

    return (
        <div>

            <div className="flex flex-col items-center relative">
                <div className="bg-gray-700 h-80 w-full"></div>
                <div className="absolute top-28">
                    <img className='w-48 lg:w-96 h-44 lg:h-96 rounded-full shadow-2xl ring-8 ring-white hover:scale-110' src={foodImage} alt={foodName} />
                    <div className='w-32 h-32 text-2xl text-white flex gap-2 items-center justify-center rounded-full shadow-2xl bg-black ring-8 ring-white absolute top-12 left-80 hover:scale-125'>
                        <p ><span className="font-bold text-3xl">{price} $</span> <br /><span className="pl-9 text-right"> Only</span></p>
                    </div>
                </div>
                <div className='pl-6 pt-52 pb-16 space-y-3 text-center bg-[#e3eaa7] w-full'>
                    <p className='text-5xl text-center font-bold text-[#374d16]'>{foodName}</p>
                    <div className="flex justify-evenly text-[#3a501a]">
                        <p className='text-2xl font-semibold flex gap-2 items-center justify-center'><CiForkAndKnife className='text-3xl font-bold'></CiForkAndKnife> {foodCategory}</p>
                        <p className='text-2xl flex gap-2 items-center justify-center'><CiShoppingCart className='text-3xl'></CiShoppingCart> {quantity} items left</p>
                    </div>
                    <Link to={`/foodsPurchase/${_id}`}><button className="btn w-1/2">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;