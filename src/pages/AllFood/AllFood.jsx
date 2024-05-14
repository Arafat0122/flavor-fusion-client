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
            <h2 className="text-4xl text-center font-extrabold my-4">All Food</h2>
            <div className="space-y-5">
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