import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'} className="">Home</NavLink></li>
        <li><NavLink to={'/foods'} className="">All Foods</NavLink></li>
        <li><NavLink to={'/gallery'} className="">Gallery</NavLink></li>
    </>


    return (
        <div className="mb-3">
            <div className="navbar bg-[#e3eaa7] text-[#57742b] py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-[#888d57] text-lg font-bold">
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
                <div className="navbar-end px-3 space-x-2 text-lg font-bold">
                    {user ? (
                        <>
                            {/* Show profile picture and logout button */}
                            <Link><button onClick={handleSignOut}>Log Out</button></Link>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img title={user.displayName} alt={user.displayName} src={user.photoURL} />
                                        <Tooltip
                                            anchorSelect="#my-anchor-element"
                                            content={user.displayName}
                                        />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#888d57] rounded-box w-48 t text-white">
                                    <li><Link to={'/'} >My added food items</Link></li>
                                    <li><Link to={'/'} >Add a food item</Link></li>
                                    <li><Link to={'/'} >My ordered food items</Link></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="space-x-2">
                                <Link to={'/login'}>Login</Link>
                                <span>|</span>
                                <Link to={'/register'}>Register</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;