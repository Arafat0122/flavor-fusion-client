import { useContext, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const url = `http://localhost:5000/purchaseFood?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>Food Image</th>
                            <th className="text-center">Food Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(food => (
                            <tr key={food._id}>
                                <td>
                                    <img src={food.image} alt={food.foodName} className="w-12 h-12" />
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

export default MyOrder;