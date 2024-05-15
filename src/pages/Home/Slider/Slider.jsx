import { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='bg-[#000000d7] my-3'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="her h-full" style={{ backgroundImage: 'url(https://www.bu.edu/bhr/files/2017/01/service-1303313_1280.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-16">
                            <div className="h-fit my-auto">
                                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-left">Savor Exquisite Creations</h1>
                                <p className="mb-5 max-w-xl text-left">Discover culinary masterpieces that tantalize your taste buds. Each dish is a work of art, meticulously prepared to delight your senses.</p>
                                <Link to={'/foods'}><button className='flex btn bg-[#b8b640d7] text-lg text-gray-200 font-semibold w-1/3'>All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="her h-fit" style={{ backgroundImage: 'url(https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08812-1-scaled.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-16">
                            <div className="h-fit my-auto">
                                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-left">Unleash Your Palates Adventure</h1>
                                <p className="mb-5 max-w-xl text-left">Embark on a gastronomic adventure filled with bold flavors and unexpected delights. Let your taste buds explore a world of culinary wonders.</p>
                                <Link to={'/foods'}><button className='flex btn bg-[#b8b640d7] text-lg text-gray-200 font-semibold w-1/3'>All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="her h-fit" style={{ backgroundImage: 'url(https://cdn.cluboenologique.com/wp-content/uploads/2019/08/12161304/ct-birdseye_38515147396_o-e1588693413556.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-16">
                            <div className="h-fit my-auto">
                                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-left">Elevate Your Dining Experience</h1>
                                <p className="mb-5 max-w-xl text-left">Elevate your dining experience with our curated selection of gourmet dishes. Immerse yourself in a world of sophistication and taste perfection.</p>
                                <Link to={'/foods'}><button className='flex btn bg-[#b8b640d7] text-lg text-gray-200 font-semibold w-1/3'>All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="her h-fit" style={{ backgroundImage: 'url(https://www.escoffier.edu/wp-content/uploads/2022/07/View-of-stylish-empty-cafe-with-arranged-wooden-tables-and-black-chairs-768.jpeg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-16">
                            <div className="h-fit my-auto">
                                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-left">Taste the Essence of Authenticity</h1>
                                <p className="mb-5 max-w-xl text-left">Experience the essence of authenticity in every bite. Our dishes are crafted with traditional recipes and premium ingredients for a truly authentic dining experience.</p>
                                <Link to={'/foods'}><button className='flex btn bg-[#b8b640d7] text-lg text-gray-200 font-semibold w-1/3'>All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="her h-fit" style={{ backgroundImage: 'url(https://www.moma.org/d/p/sa/8-14-23_Restaurant-Header_Final.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-16">
                            <div className="h-fit my-auto">
                                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-left">Journey Through Flavorful Traditions</h1>
                                <p className="mb-5 max-w-xl text-left">Take a journey through time and tradition with our diverse menu. Explore flavors from around the world, each dish a tribute to rich culinary heritage.</p>
                                <Link to={'/foods'}><button className='flex btn bg-[#b8b640d7] text-lg text-gray-200 font-semibold w-1/3'>All Food</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;