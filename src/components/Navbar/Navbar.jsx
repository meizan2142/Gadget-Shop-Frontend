import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    const navLinks = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/'>Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/products'>Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/about'>About<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/contact'>Contact Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink to='/login'><button className='bg-cyan-300 p-2 rounded-lg text-black font-bold'>SignIn</button></NavLink>
        </li>
        <li>
            <NavLink to='/signup'><button className='bg-cyan-300 p-2 rounded-lg text-black font-bold'>Register</button></NavLink>
        </li>
    </>
    return (
        <nav className="flex fixed w-full z-[10] items-center justify-between bg-[#393E46] px-4 py-2 text-white ">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2>Gadget Shop</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                {navLinks}
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <NavLink to='/products'>Products</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;