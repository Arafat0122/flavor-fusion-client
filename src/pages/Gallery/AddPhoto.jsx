import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const AddPhoto = ({ closeModal }) => {

    const {user} = useContext(AuthContext)

    const handleAddPhoto = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const feedback = form.get('feedback');
        const image = form.get('image');

        const photoAdded = { name, feedback, image };

        console.log(photoAdded)
    }

    return (
        <dialog className="modal modal-bottom sm:modal-middle" open>
            <div className="modal-box bg-[#584624]">
                <h3 className="font-bold text-xl text-white ">Add Photo</h3>
                <form onSubmit={handleAddPhoto} className='space-y-2'>
                    <div className="space-y-2">
                        <label className="block text-xl font-bold text-[#edff48]">User Name</label>
                        <input type="text" name="name" placeholder="Your Name" readOnly defaultValue={user.displayName} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-xl font-bold text-[#edff48]">Feedback</label>
                        <textarea type="text" name="feedback" placeholder="Write your feedback here......" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" rows={5} />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-xl font-bold text-[#edff48]">Image URL</label>
                        <input type="text" name="image" placeholder="Image URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="modal-action">
                        <input type='submit' value={'Add Your Image'} className="btn"/>
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

AddPhoto.propTypes = {
    closeModal: PropTypes.any
}

export default AddPhoto;