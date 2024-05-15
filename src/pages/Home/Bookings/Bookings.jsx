

const Bookings = () => {
    return (
        <div>
            <section className="p-6 bg-[#57742b] text-white mb-10 rounded-lg">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-[#f0efef69]">
                        <span className="block text-5xl font-extrabold mb-2 text-violet-600">Make Your </span>
                        <h1 className="text-5xl font-extrabold text-gray-900">Reservation Today!</h1>
                        <p className="my-8">
                            <span className="font-medium text-gray-900">Experience the exquisite flavors and warm hospitality of our restaurant. Secure your table now to indulge in a culinary journey like no other.
                            </span>
                        </p>
                        <form noValidate="" action="" className="self-stretch space-y-3">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-600 border-2 border-black p-3" />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-600 border-2 border-black p-3" />
                            </div>
                            <button className="w-full py-2 font-semibold rounded bg-violet-600 text-gray-50">Join the waitlist</button>
                        </form>
                    </div>
                    <img src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500" />
                </div>
            </section>

        </div>
    );
};

export default Bookings;