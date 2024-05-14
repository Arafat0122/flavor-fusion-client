import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const url = `http://localhost:5000/purchaseFood?email=${user?.email}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setFoods(data);

                // Store data in local storage
                localStorage.setItem('userFoods', JSON.stringify(data));
            }
            catch (error) {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        };

        const storedData = localStorage.getItem('userFoods');
        if (storedData) {
            setFoods(JSON.parse(storedData));
        } else {
            fetchData();
        }
    }, [url]);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/purchaseFood/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = foods.filter(food => food._id !== _id);
                            setFoods(remaining);                     
                        }
                    })
            }
        });
    }

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
                            <th className="text-center">Delete</th>
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
                                    <button onClick={() => handleDelete(food._id)} className="text-2xl pl-2"><FaTrash /></button>
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