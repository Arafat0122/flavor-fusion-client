import { Outlet } from "react-router-dom";
import Navbar from "../commonPages/Navbar/Navbar";
import Footer from "../commonPages/Footer/Footer";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;