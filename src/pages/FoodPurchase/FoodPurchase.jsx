import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodPurchase = () => {

    const foods = useLoaderData();
    const { user } = useContext(AuthContext);

    const { foodName, foodImage, price, quantity } = foods;

    const handlePurchase = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const foodName = form.get('foodName');
        const price = form.get('price');
        const quantity = form.get('quantity');
        const name = form.get('name');
        const email = form.get('email');

        const purchaseFood = { foodName, price, quantity, name, email };

        console.log(purchaseFood)

        // send data to the database
        fetch('http://localhost:5000/purchaseFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Add'
                    })
                }
            })

    }

    return (
        <div>
            <div className="grid grid-cols-2 bg-center bg-[url('https://i.ibb.co/DWvWhm4/2147701348.jpg')] rounded-xl">
                <div className="content-center">
                    <img className="w-full h-full rounded-l-xl" src={foodImage} alt="" />
                </div>
                <div className="content-center p-5">
                    <form onSubmit={handlePurchase} className="space-y-3">
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Food Name</label>
                            <input type="text" name="foodName" placeholder="Food Name" defaultValue={foodName} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <label className="block text-xl font-bold text-[#edff48]">Price</label>
                                <input type="text" name="price" placeholder="Food Name" defaultValue={`${price} $`} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xl font-bold text-[#edff48]">Quantity</label>
                                <input type="text" name="quantity" placeholder="Food Name" defaultValue={quantity} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Buyer Name</label>
                            <input type="text" name="name" placeholder="Food Name" defaultValue={user ? user.displayName : ''} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Buyer Email</label>
                            <input type="text" name="email" placeholder="Your email" defaultValue={user ? user.email : ''} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="w-fit mx-auto p-5">
                            <input type="submit" value="Purchase" className="btn lg:w-96 rounded-md bg-gradient-to-l from-[#46cadb] to-[#6887dd] text-gray-50 font-bold text-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;