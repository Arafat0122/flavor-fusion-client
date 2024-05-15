import { useEffect, useState } from "react";
import TopFood from "./TopFood";


const TopFoods = () => {

    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setTopFoods(data)
                console.log(topFoods)
                console.log(data)
            })
            
    }, [])

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