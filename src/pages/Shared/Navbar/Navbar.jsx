import { Link, NavLink } from "react-router-dom";
import userDefault from "../../../assets/image/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/image/logo.png"
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()
    }
    const nav=<>
    <NavLink to="/"> <li><a>Home</a></li></NavLink>
    <NavLink to="/allNews"> <li><a>All News</a></li></NavLink>
    <NavLink to="/about"> <li><a>About</a></li></NavLink>
    <NavLink to="/career"> <li><a>Career</a></li></NavLink>
    {!user && <NavLink to="/login"> <li><a>Login</a></li></NavLink>}
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            nav
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" className="w-40" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user? user.photoURL:userDefault}/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
                        <Link to="/profile"><li><a>Profile</a></li></Link>
                        {
                            user?<li>
                                <button onClick={handleLogOut}>SignOut</button>
                            </li>:
                           <Link to="/login"> <li><a>Login</a></li></Link>
                        }
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;