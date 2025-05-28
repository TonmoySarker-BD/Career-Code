import { NavLink } from 'react-router';
import ThemeSwitch from '../../context/theme/ThemeSwitch';
import logo from "../../assets/logo.png"

const NavBar = () => {
    const menu = <>
        <li className='font-semibold'><NavLink to="/">Home</NavLink></li>
        <li className='font-semibold'><NavLink to="/Find-Jobs">Find Jobs</NavLink></li>
        <li className='font-semibold'><NavLink to="/Recruiters">Recruiters</NavLink></li>
        <li className='font-semibold'><NavLink to="/Blog">Blog</NavLink></li>
        <li className='font-semibold'><NavLink to="/Contact">Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menu}
                    </ul>
                </div>
                <NavLink to={"/"} className="text-xl cursor-pointer"> <div className="flex items-center">
                    <img width="50"
                        height="50" src={logo} alt="Opptly Logo" />
                    <p className='text-3xl font-bold text-purple-900'>Opptly</p>
                </div></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <ThemeSwitch />
                <NavLink to={"/SignIn"} className="btn bg-primary text-white">Sign In</NavLink>
            </div>
        </div>
    );
};

export default NavBar;