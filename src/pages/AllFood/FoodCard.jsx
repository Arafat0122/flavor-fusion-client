import PropTypes from 'prop-types';
import { CiForkAndKnife, CiShoppingCart } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FoodCard = ({ foodData }) => {

    const { _id, foodName, foodImage, foodCategory, price, quantity } = foodData

    return (
        <div>
            <div className='bg-red-300 flex'>
                <div>
                    <img className='w-48 lg:w-96 h-44 lg:h-96 rounded-r-full shadow-2xl' src={foodImage} alt="" />
                </div>
                <div className=' pl-6 pt-20 space-y-3'>
                    <p className='text-5xl font-bold text-white'>{foodName}</p>
                    <p className='text-2xl font-semibold pl-9 flex gap-2 items-center'><CiForkAndKnife className='text-3xl font-bold'></CiForkAndKnife> {foodCategory}</p>
                    <p className='text-2xl flex gap-2 items-center'><span className='font-bold'>Price: </span> {price} <FaDollarSign className='text-2xl bg-yellow-600 rounded-full p-1'></FaDollarSign></p>
                    <p className='text-2xl flex gap-2 items-center'><CiShoppingCart className='text-3xl'></CiShoppingCart> {quantity} left</p>
                    <Link to={`/foods/${_id}`}><button className='btn w-2/3'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    foodData: PropTypes.any
}

export default FoodCard;