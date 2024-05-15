import { useContext, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const MyAddedFood = () => {

    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const url = `https://flavor-fusion-psi.vercel.app/myFoods?email=${user?.email}`;

    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | My Added Food</title>
            </Helmet>
            <h2 className="text-4xl lg:text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#688012] to-[#531a1a] hover:scale-150 hover:text-[#816f32] pt-5 mb-10">My Added Food</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th className="hidden lg:flex">Food Image</th>
                            <th className="text-center">Food Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(food => (
                            <tr key={food._id}>
                                <td className="hidden lg:flex">
                                    <img src={food.foodImage} alt={food.foodName} className="w-12 h-12" />
                                </td>
                                <td className="text-center">{food.foodName}</td>
                                <td className="text-center">{food.price}</td>
                                <td className="text-center">
                                    <Link to={`/update/${food._id}`}>
                                        <button className="text-2xl"><FaDownload /></button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedFood;