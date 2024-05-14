import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateFood = () => {

    const { user } = useContext(AuthContext);

    const foodsData = useLoaderData();

    const handleFood = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const foodName = form.get('foodName');
        const foodImage = form.get('foodImage');
        const foodCategory = form.get('foodCategory');
        const price = parseFloat(form.get('price'));
        const foodOrigin = form.get('foodOrigin');
        const quantity = parseInt(form.get('quantity'));
        const item1 = form.get('item-1');
        const item2 = form.get('item-2');
        const item3 = form.get('item-3');
        const item4 = form.get('item-4');
        const item5 = form.get('item-5');
        const ingredients = [item1, item2, item3, item4, item5];
        const step1 = form.get('step-1');
        const step2 = form.get('step-2');
        const step3 = form.get('step-3');
        const step4 = form.get('step-4');
        const step5 = form.get('step-5');
        const making = [step1, step2, step3, step4, step5];
        const description = { ingredients, making };

        const updatedFood = { foodName, foodImage, foodCategory, price, foodOrigin, quantity, description };


        console.log(updatedFood);

        // send data to the database
        fetch(`http://localhost:5000/foods/${foodsData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Update'
                    })
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleFood} className="lg:grid space-y-3 p-3 lg:p-8 rounded-lg bg-[url('https://i.ibb.co/TvsSZKP/travel.png')]">
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Food Name</label>
                    <input type="text" name="foodName" required defaultValue={foodsData.foodName} placeholder="Food Name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Food Image URL</label>
                    <input type="text" name="foodImage" required defaultValue={foodsData.foodImage} placeholder="Food Image URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="grid lg:grid-cols-4 gap-2 lg:gap-10">
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Food Category</label>
                        <input type="text" name="foodCategory" required defaultValue={foodsData.foodCategory} placeholder="Food Category" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Food Origin</label>
                        <input type="text" name="foodOrigin" required defaultValue={foodsData.foodOrigin} placeholder="Food Origin (Country)" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Price</label>
                        <input type="text" name="price" required defaultValue={foodsData.price} placeholder="Price $" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Quantity</label>
                        <input type="text" name="quantity" required defaultValue={foodsData.quantity} placeholder="Quantity" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-2 lg:gap-10">
                    <div>
                        <div>
                            <label className="block text-xl font-medium text-white">Ingredients</label>
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Item-01</label>
                            <input type="text" name="item-1" required placeholder="Item-01" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Item-02</label>
                            <input type="text" name="item-2" placeholder="Item-02" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Item-03</label>
                            <input type="text" name="item-3" placeholder="Item-03" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Item-04</label>
                            <input type="text" name="item-4" placeholder="Item-04" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Item-05</label>
                            <input type="text" name="item-5" placeholder="Item-05" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="block text-xl font-medium text-white">Making Procedure</label>
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Step-01</label>
                            <input type="text" name="step-1" placeholder="Step-01" required className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Step-02</label>
                            <input type="text" name="step-2" placeholder="Step-02" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Step-03</label>
                            <input type="text" name="step-3" placeholder="Step-03" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Step-04</label>
                            <input type="text" name="step-4" placeholder="Step-04" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2 pl-5">
                            <label className="block text-lg font-medium text-white">Step-05</label>
                            <input type="text" name="step-5" placeholder="Step-05" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Your Email</label>
                    <input type="email" name="email" required readOnly placeholder="Your Email" defaultValue={user?.email} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Your Name</label>
                    <input type="text" name="name" required readOnly placeholder="Your Name" defaultValue={user?.displayName} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="w-fit mx-auto p-5">
                    <input type="submit" value="Update Food" className="btn lg:w-96 rounded-md bg-gradient-to-l from-[#46cadb] to-[#6887dd] text-gray-50 font-bold text-lg" />
                </div>
            </form>
        </div>
    );
};

export default UpdateFood;