import { useState } from "react";
import AddPhoto from "./AddPhoto";
import { useLoaderData } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";


const Gallery = () => {

    const photos = useLoaderData();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
                {photos.map(photo => (
                    <div
                        key={photo._id}
                        className="border-2 border-black hover:scale-105 relative"
                    >
                        <img className="w-full h-full" src={photo.imageUrl} />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex items-center justify-center p-5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">{photo.userName}</h3>
                                <p className="text-lg">{photo.feedback}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="modal">
                <div className="p-5">
                    <section className="py-6 bg-[#e3eaa7] text-[#57742b] rounded-xl">
                        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                            <div className="flex flex-col justify-center lg:text-left">

                                <h1 className="py-2 text-3xl font-medium leading-tight title-font">Add Your Photo</h1>
                                <p className="mb-1 text-sm font-medium tracking-widest uppercase text-violet-600">Share your favorite moments with the community by adding your own photo along with a brief description to our restaurant gallery.</p>

                            </div>
                            <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                                <button onClick={toggleModal} className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 text-gray-50">
                                    <FaPhotoFilm></FaPhotoFilm>
                                    <span className="flex flex-col items-start ml-4 leading-none">
                                        <span className="font-bold title-font">Add Photo</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
                {showModal && <AddPhoto closeModal={toggleModal} />}
            </div>
        </div>
    );
};

export default Gallery;