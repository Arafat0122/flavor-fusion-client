import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet";


const AllFood = () => {

    const foodsData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | All Food</title>
            </Helmet>
            <h2 className="text-4xl lg:text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#688012] to-[#531a1a] hover:scale-150 hover:text-[#816f32] pt-5 mb-10">All Food</h2>
            <div className="space-y-5 max-w-lg lg:max-w-5xl mx-auto mb-5">
                {
                    foodsData.map(foodData => <FoodCard 
                        key={foodData._id}
                        foodData={foodData}
                        ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;