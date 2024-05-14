import { Helmet } from "react-helmet";
import { CiForkAndKnife, CiShoppingCart } from "react-icons/ci";
import { MdAccountBalance } from "react-icons/md";
import { PiChefHatDuotone } from "react-icons/pi";
import { SiGumtree } from "react-icons/si";
import { Link, useLoaderData } from "react-router-dom";


const SingleFood = () => {

    const foods = useLoaderData();

    const { _id, foodName, foodImage, foodCategory, price, quantity, madeBy, foodOrigin, description } = foods;

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | {foodName}</title>
            </Helmet>
            <div className="flex flex-col items-center my-5 relative">
                <div className="bg-gray-700 h-36 md:h-52 lg:h-80 w-full"></div>
                <div className="absolute top-12 md:top-16 lg:top-28">
                    <img className='w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 rounded-full shadow-2xl ring-8 ring-white hover:scale-110' src={foodImage} alt={foodName} />
                    <div className='w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 text-2xl text-white flex gap-2 items-center justify-center rounded-full shadow-2xl bg-black ring-4 lg:ring-8 ring-white absolute top-0 lg:top-12 left-36 md:left-48 lg:left-80 hover:scale-125'>
                        <p className="text-center"><span className="font-bold text-sm lg:text-2xl">{price}$</span><span className="lg:pl-9 text-sm lg:text-xl text-right"> <br /> Only</span></p>
                    </div>
                </div>
                <div className='px-6 pt-28 md:pt-40 lg:pt-52 pb-16 space-y-3 bg-[#e3eaa7] text-[#3a501a] w-full'>
                    <p className='text-5xl text-center font-bold text-[#374d16]'>{foodName}</p>
                    <div className="grid lg:grid-cols-2 items-start pl-12">
                        <p className='text-2xl font-semibold flex gap-2 items-center lg:justify-center'><CiForkAndKnife className='text-3xl font-bold'></CiForkAndKnife> {foodCategory}</p>
                        <p className='text-2xl flex gap-2 items-center lg:justify-center'><CiShoppingCart className='text-3xl'></CiShoppingCart> {quantity} items left</p>
                        <p className='text-2xl font-semibold flex gap-2 items-center lg:justify-center'><PiChefHatDuotone />{madeBy}</p>
                        <p className='text-2xl font-semibold flex gap-2 items-center lg:justify-center'> <MdAccountBalance />{foodOrigin}</p>
                    </div>
                    <div className="w-3/5 lg:mx-auto md:pl-12 lg:pl-0">
                        <h2 className="text-3xl font-bold text-left">Description</h2>
                        <div className="grid lg:grid-cols-2 lg:content-center pl-2 lg:pl-10">
                            <div>
                                <h3 className='text-2xl font-bold flex items-start'>Ingredients</h3>
                                <ul className="flex flex-col items-start">
                                    {description.ingredients.map((ingredient, idx) => <li
                                        key={idx}
                                        className="flex items-center gap-1 pl-2"
                                    ><SiGumtree /> {ingredient}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold flex items-start'>Making Procedure</h3>
                                <ol className="flex flex-col items-start space-y-1">
                                    {description.makingProcedure.map((step, idx) => <li
                                        key={idx}
                                        className="pl-2 text-left"
                                    ><span className="font-bold">{idx + 1}. </span> {step}</li>)}
                                </ol >
                            </div>
                        </div>
                    </div>
                    <Link to={`/foodsPurchase/${_id}`}><button className="btn w-full mx-auto mt-3 lg:mt-8 content-center">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;