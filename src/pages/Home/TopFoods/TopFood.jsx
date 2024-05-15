import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopFood = ({ topFood }) => {

    const { _id, foodName, foodImage, foodCategory, price, quantity, madeBy, foodOrigin } = topFood;

    return (
        <div>
            <div className="bg-[#e3eaa7] text-[#57742b] shadow-lg rounded-lg w-full md:h-full lg:h-full">
                <img className="w-full h-64  lg:h-72 object-cover object-center rounded-lg" src={foodImage} alt={foodName} />
                <div className="p-6">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-2 md:h-14 lg:h-20">{foodName}</h3>
                    <p className="text-gray-100 font-bold bg-blue-700 w-fit px-2 py-1 rounded-full text-lg mb-4">{foodCategory}</p>
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-700 text-lg">Price: <span className="font-semibold text-xl">${price}</span></p>
                        <p className="text-gray-700 text-lg">Available: <span className="font-semibold text-xl">{quantity}</span></p>
                    </div>
                    <div className="flex flex-col items-center justify-between mb-4 h-16">
                        <p className="text-gray-700 text-lg">Made By: <span className="font-semibold text-xl">{madeBy}</span></p>
                        <p className="text-gray-700 text-lg">Origin: <span className="font-semibold text-xl">{foodOrigin}</span></p>
                    </div>
                    <div className="">
                        <Link to={`/foods/${_id}`}><button className='btn w-full mt-5'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopFood.propTypes = {
    topFood: PropTypes.object
}

export default TopFood;