import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddFood = () => {

    const { user } = useContext(AuthContext);

    const handleAddFood = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const foodName = form.get('foodName');
        const foodImage = form.get('foodImage');
        const foodCategory = form.get('foodCategory');
        const price = parseFloat(form.get('price'));
        const foodOrigin = form.get('foodOrigin');
        const quantity = parseInt(form.get('quantity'));
        const email = form.get('email');
        const name = form.get('name');

        const newFood = { foodName, foodImage, foodCategory, price, foodOrigin, quantity, email, name };

        const food = [foodName, name, email]

        console.log(newFood)
        console.log(food)

    }

    return (
        <div>
            <form onSubmit={handleAddFood} className="lg:grid space-y-3 p-3 lg:p-8 rounded-lg bg-[url('https://i.ibb.co/TvsSZKP/travel.png')]">
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Food Name</label>
                    <input type="text" name="foodName" required placeholder="Food Name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-white">Food Image URL</label>
                    <input type="text" name="foodImage" required placeholder="Food Image URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="grid lg:grid-cols-4 gap-2 lg:gap-10">
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Food Category</label>
                        <input type="text" name="foodCategory" required placeholder="Food Category" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Food Origin</label>
                        <input type="text" name="foodOrigin" required placeholder="Food Origin" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Price</label>
                        <input type="text" name="price" required placeholder="Price $" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-white">Quantity</label>
                        <input type="text" name="quantity" required placeholder="Quantity" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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
                    <input type="submit" value="Add Food" className="btn lg:w-96 rounded-md bg-gradient-to-l from-[#46cadb] to-[#6887dd] text-gray-50 font-bold text-lg" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;