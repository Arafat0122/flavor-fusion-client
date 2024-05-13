import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";


const AllFood = () => {

    const foodsData = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">All Food here</h2>
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