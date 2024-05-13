import { useState } from "react";
import AddPhoto from "./AddPhoto";


const Gallery = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button className="btn" onClick={toggleModal}>Add</button>
                </div>

                {showModal && (
                    <AddPhoto closeModal={toggleModal} />
                )}

            </div>
        </div>
    );
};

export default Gallery;