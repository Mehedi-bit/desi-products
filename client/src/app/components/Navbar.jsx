import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-green-500 flex justify-center items-center">
            <div className="flex-1">
            <a className="btn btn-ghost sm:text-sm md:text-xl text-white flex justify-center items-center">Desi<br className="sm:hidden" /> products</a>
            </div>

            <div className="flex items-center justify-center sm:w-[50%] md:w-[30%] lg:w-[30%]">
                <div className="form-control w-[100%]"> 
                    <input type="text" placeholder="Search products" className="input input-bordered w-[100%] md:w-auto mr-5 h-10 bg-white" />
                </div>
            </div>

            <div className="flex-none gap-2 flex items-center">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="menu" src="user.png" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
