import PropTypes from 'prop-types';
import { CiForkAndKnife, CiShoppingCart } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FoodCard = ({ foodData }) => {

    const { _id, foodName, foodImage, foodCategory, price, quantity } = foodData

    return (
        <div>
            <div className='bg-[#e3eaa7] text-[#57742b] lg:flex rounded-xl'>
                <div>
                    <img className='w-full lg:w-96 h-80 lg:h-96 my-auto lg:rounded-r-full shadow-2xl' src={foodImage} alt="" />
                </div>
                <div className=' lg:pl-6 pt-5 lg:pt-20 space-y-3 text-center'>
                    <p className='text-4xl lg:text-5xl font-bold text-white'>{foodName}</p>
                    <div className='w-fit lg:w-full mx-auto'>
                        <p className='text-2xl font-semibold flex gap-2 items-center'><CiForkAndKnife className='text-3xl font-bold'></CiForkAndKnife> {foodCategory}</p>
                        <p className='text-2xl flex gap-2 items-center'><span className='font-bold'>Price: </span> {price} <FaDollarSign className='text-2xl bg-yellow-600 rounded-full p-1'></FaDollarSign></p>
                        <p className='text-2xl flex gap-2 items-center'><CiShoppingCart className='text-3xl'></CiShoppingCart> {quantity} left</p>
                    </div>
                    <Link to={`/foods/${_id}`}><button className='btn w-4/5 my-5'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    foodData: PropTypes.any
}

export default FoodCard;