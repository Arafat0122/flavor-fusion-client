import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodPurchase = () => {

    const foods = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, foodName, foodImage, price, quantity: availableQuantity, madeBy } = foods;
    const [quantity, setQuantity] = useState(0);

    const handlePurchase = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const foodQuantity = parseInt(form.get('foodQuantity'));
        setQuantity(foodQuantity)
        if (availableQuantity === 0) {
            // Show message and return if available quantity is zero
            Swal.fire({
                title: 'Not Available',
                text: 'Sorry, this item is not available for purchase.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (foodQuantity > availableQuantity) {
            // Show message and return if user tries to buy more than available quantity
            Swal.fire({
                title: 'Quantity Exceeded',
                text: `You can't buy more than ${availableQuantity} items.`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (user && user.displayName === madeBy) {
            // Show message and return if user tries to purchase their own added food items
            Swal.fire({
                title: 'Not Allowed',
                text: 'You cannot purchase your own added food items.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Construct the purchase data object
        const purchaseFood = {
            foodId: _id,
            foodImage,
            foodName,
            price,
            quantity: foodQuantity,
            name: user ? user.displayName : '',
            email: user ? user.email : '',
            time: new Date().toLocaleTimeString()
        };

        // Send data to the database
        fetch('https://flavor-fusion-psi.vercel.app/purchaseFood', {
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
                        text: 'Food Purchase Successfully',
                        icon: 'success',
                        confirmButtonText: 'Purchased'
                    });
                }
            });
    }


    return (
        <div>
            <Helmet>
                <title>FlavorFusion | Purchase</title>
            </Helmet>
            <div className="grid lg:grid-cols-2 bg-center bg-[url('https://i.ibb.co/DWvWhm4/2147701348.jpg')] rounded-2xl lg:rounded-none">
                <div className="content-center p-3 lg:p-0">
                    <img className="w-72 lg:w-full mx-auto h-72 lg:h-[640px] ring-4 lg:ring-0 rounded-full lg:rounded-none lg:rounded-l-xl" src={foodImage} alt="" />
                </div>
                <div className="content-center px-5 bg-[#00000081] rounded-2xl">
                    <form onSubmit={handlePurchase} className="space-y-3">
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Food Name</label>
                            <input type="text" name="foodName" readOnly placeholder="Food Name" defaultValue={foodName} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="flex justify-between gap-3">
                            <div className="space-y-2">
                                <label className="block text-xl font-bold text-[#edff48]">Price</label>
                                <input type="text" name="price" readOnly placeholder="Food Name" defaultValue={`${price} $`} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xl font-bold text-[#edff48]">Quantity</label>
                                <input type="text" name="foodQuantity" placeholder="Food Name" defaultValue='1' className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Buyer Name</label>
                            <input type="text" name="name" readOnly placeholder="Food Name" defaultValue={user ? user.displayName : ''} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Buyer Email</label>
                            <input type="text" name="email" readOnly placeholder="Your email" defaultValue={user ? user.email : ''} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 hidden">
                            <label className="block text-xl font-bold text-[#edff48]">Time</label>
                            <input type="text" name="time" readOnly defaultValue={new Date().toLocaleTimeString()} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="w-fit mx-auto p-5">
                            <input type="submit" value="Purchase" disabled={availableQuantity === 0 || quantity > availableQuantity} className="btn lg:w-96 rounded-md bg-gradient-to-l from-[#46cadb] to-[#6887dd] text-gray-50 font-bold text-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;