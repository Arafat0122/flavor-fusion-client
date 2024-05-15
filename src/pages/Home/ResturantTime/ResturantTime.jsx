

const ResturantTime = () => {
    return (
        <div>
            <section className="bg-[#57742b] text-white pt-9 mb-10 rounded-2xl">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://images.getbento.com/accounts/0dc3afa185c13d245b6a95eba90422e9/media/images/ophelia-zodiac-dj-ad-v1-2019.gif?w=1000&fit=max&auto=compress,format&h=1000" alt="" className="object-contain h-96 md:h-[500px] lg:h-[600px] xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Opening
                            <span className="text-violet-600"> Hours</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-center">
                            <span className="font-bold">Monday - Wednesday:</span> 5pm - 11pm
                            <br />
                            <span className="font-bold">Thursday:</span> 5pm - 12am
                            <br />
                            <span className="font-bold">Friday - Saturday:</span> 5pm - 2am
                            <br />
                            <span className="font-bold">Sunday:</span> 12pm - 11pm
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start w-full">
                            <a rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50 w-full text-center">Get Directions</a>
                        </div>
                        <div>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 text-center">3 Mitchell Place (49th & 1st Avenue),
                                <br />
                                New York, NY 10017on Google Maps
                                <br className="" />
                                Call Ophelia Lounge NYC by phone at212.980.4796
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ResturantTime;