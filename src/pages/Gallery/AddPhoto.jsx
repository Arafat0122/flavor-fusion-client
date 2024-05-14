import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import PrivateRoute from '../../Routers/PrivateRoutes';


const AddPhoto = ({ closeModal }) => {

    const { user } = useContext(AuthContext)

    const handleAddPhoto = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userName = form.get('userName');
        const feedback = form.get('feedback');
        const imageUrl = form.get('image');

        const photoAdded = { userName, feedback, imageUrl };

        console.log(photoAdded)

        fetch('http://localhost:5000/gallery/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(photoAdded)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Photo Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Add'
                    })
                }
            })
    }

    return (
        <PrivateRoute>
            <div>
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box bg-[#5b5f1f]">
                        <h3 className="font-bold text-xl text-white ">Add Photo</h3>
                        <form onSubmit={handleAddPhoto} className='space-y-2'>
                            <div className="space-y-2">
                                <label className="block text-xl font-bold text-[#edff48]">User Name</label>
                                <input type="text" name="userName" placeholder="Your Name" readOnly defaultValue={user?.displayName} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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
                                <input type='submit' value={'Add Your Image'} className="btn" />
                                <button className="btn" onClick={closeModal}>Close</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </PrivateRoute>
    );
};

AddPhoto.propTypes = {
    closeModal: PropTypes.any
}

export default AddPhoto;