import { useEffect, useState } from "react";
import TopFood from "./TopFood";


const TopFoods = () => {

    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('https://flavor-fusion-psi.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                // Sort food items based on purchase count
                const sortedFoods = data.sort((a, b) => b.purchaseCount - a.purchaseCount).slice(0, 6);
                setTopFoods(sortedFoods);
            });
    }, []);

    return (
        <div className="mb-10">
            <h2 className="text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#688012] to-[#531a1a] hover:scale-150 hover:text-[#816f32] pt-5 my-5 lg:my-10">Top Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    topFoods.map(topFood => <TopFood 
                        key={topFood._id}
                        topFood={topFood}
                        ></TopFood>)
                }
            </div>
        </div>
    );
};

export default TopFoods;