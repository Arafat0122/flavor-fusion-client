import { NavLink } from "react-router-dom";



const Navbar = () => {

    // const isLoggedIn = false;
    const isLoggedIn = true;

    const navLinks = <>
        <li><NavLink to={'/'} className="">Home</NavLink></li>
        <li><NavLink to={'/foods'} className="">All Foods</NavLink></li>
        <li><NavLink to={'/gallery'} className="">Gallery</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar bg-[#86715dec] text-white py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-[#6e5050] text-lg font-bold">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/gRwHGLS/Flavor-Fusion.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2 text-lg font-bold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end px-1 space-x-2 text-lg font-bold">
                    {isLoggedIn ? (
                        <>
                            {/* Show profile picture and logout button */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-18 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#6e5050] rounded-box w-32">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <a href="#" className="hover:underline">Login</a>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;