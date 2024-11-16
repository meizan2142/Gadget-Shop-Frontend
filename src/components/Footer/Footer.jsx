import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white md:flex-row md:gap-0">
                <h5 className="text-2xl font-bold">Gadget Shop</h5>
                <nav className="text-lg">
                    <ul className="flex h-full items-center justify-center gap-3">
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
                    </ul>
                </nav>
            </div>
            <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">
                <p>&copy; 2024 Gadget Shop. All Rights Reserved.</p>
            </aside>
        </footer>
    );
};



export default Footer;