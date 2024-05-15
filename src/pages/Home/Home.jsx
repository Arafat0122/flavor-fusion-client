import Bookings from "./Bookings/Bookings";
import ResturantTime from "./ResturantTime/ResturantTime";
import Slider from "./Slider/Slider";
import TopFoods from "./TopFoods/TopFoods";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <ResturantTime></ResturantTime>
            <Bookings></Bookings>
        </div>
    );
};

export default Home;