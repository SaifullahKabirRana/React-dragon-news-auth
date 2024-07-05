import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div className="mt-4 md:mt-8 -mx-4 md:-mx-0">
            {user && <p>{user.
                displayName}</p>}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-1 md:-ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F]">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#706F6F] ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 md:w-10 rounded-full ">
                            {user ?
                                <img className="border-2 p-[2px] border-black rounded-full" alt="image" src={user.photoURL} />
                                :
                                <img alt="image" src={userDefaultPic} />
                            }
                        </div>
                    </div>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn px-8 md:px-10 text-[14px] md:text-[18px] bg-[#403F3F] text-white">Log Out</button>
                            :
                            <Link to='/login'>
                                <button className="btn px-8 md:px-10 text-[14px] md:text-[18px] bg-[#403F3F] text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;