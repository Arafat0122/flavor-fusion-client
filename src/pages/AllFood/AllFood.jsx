import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet";
import { useState } from "react";


const AllFood = () => {

    const foodsData = useLoaderData();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        fetch(`https://flavor-fusion-psi.vercel.app/searchFoods?query=${searchQuery}`)
            .then(res => res.json())
            .then(data => setSearchResults(data));
    };

    const foodsToDisplay = searchQuery ? searchResults : foodsData;

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | All Food</title>
            </Helmet>
            <h2 className="text-4xl lg:text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#688012] to-[#531a1a] hover:scale-150 hover:text-[#816f32] pt-5 mb-10">All Food</h2>
            <div className="space-y-5 max-w-lg lg:max-w-5xl mx-auto mb-5">
                <div className="text-center">
                    <input className="border-4 border-[#47691b] border-r-0 w-10/12 py-2 px-2 rounded-l-full" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="border-4 border-[#47691b] border-l-0 py-2 pl-3 pr-7 rounded-r-full bg-[#47691b] text-white font-bold" onClick={handleSearch}>Search</button>
                </div>
                {foodsToDisplay.map(foodData => (
                    <FoodCard key={foodData._id} foodData={foodData} />
                ))}
            </div>
        </div>
    );
};

export default AllFood;