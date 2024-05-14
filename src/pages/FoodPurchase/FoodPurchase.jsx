import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodPurchase = () => {

    const foods = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, foodName, foodImage, price, quantity:qua } = foods;

    const handlePurchase = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const foodId = _id; // Assuming you have a way to get the food ID
        const foodName = form.get('foodName');
        const price = form.get('price');
        const quantity1 = parseFloat(form.get('quantity'));
        const quantity = qua - quantity1;
        const name = form.get('name');
        const email = form.get('email');

        const purchaseFood = { foodId, foodImage, foodName, price, quantity, name, email }; // Ensure foodId is included

        console.log(purchaseFood);

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
                        text: 'Food Purchase Successfully',
                        icon: 'success',
                        confirmButtonText: 'Purchased'
                    })
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>FlavorFusion | {foodName}</title>
            </Helmet>
            <div className="grid lg:grid-cols-2 bg-center bg-[url('https://i.ibb.co/DWvWhm4/2147701348.jpg')] rounded-2xl lg:rounded-none">
                <div className="content-center p-3 lg:p-0">
                    <img className="w-72 lg:w-full mx-auto h-full ring-4 lg:ring-0 rounded-full lg:rounded-none lg:rounded-l-xl" src={foodImage} alt="" />
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
                                <input type="text" name="quantity" placeholder="Food Name" defaultValue='1' className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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
                        <div className="space-y-2">
                            <label className="block text-xl font-bold text-[#edff48]">Time</label>
                            <input type="text" name="time" readOnly defaultValue={new Date().toLocaleTimeString()} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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