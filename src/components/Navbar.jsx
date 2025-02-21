import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const navList = [
    {
        id: 1,
        name: 'Home',
        url: '/',
    },
    {
        id: 2,
        name: 'About',
        url: '/about'
    },
    {
        id: 3,
        name: 'Shop',
        url: '/shop',
    },
    {
        id: 4,
        name: 'Vendors',
        url: '/vendors',
    },
    {
        id: 5,
        name: 'Mega Menu',
        url: '/mega-menu',
    },
    {
        id: 6,
        name: 'Blog',
        url: '/blog',
    },
    {
        id: 7,
        name: 'Pages',
        url: '#',
        children: [
            { name: "About Us", url: "/about" },
            { name: "Contact", url: "/contact" },
            { name: "FAQ", url: "/faq" },
        ],
    },
    {
        id: 8,
        name: 'Contact',
        url: '/contact'
    },
]

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        if (openDropdown !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <ul className="flex items-center gap-x-6 xl:gap-x-7 2xl:gap-x-[34px]">
            {navList.map((nav) => (
                <li key={nav.id} className="relative group" ref={nav.children ? dropdownRef : null}>
                    {/* Main NavLink */}
                    <NavLink
                        to={nav.url !== "#" ? nav.url : ""}
                        className="flex gap-x-1 items-center font-bold text-xs xl:text-sm 2xl:text-base hover:text-greeny"
                        onMouseEnter={() => nav.children && setOpenDropdown(nav.id)}
                        onClick={() => setOpenDropdown(openDropdown === nav.id ? null : nav.id)}
                    >
                        {nav.name} {nav.children && <IoIosArrowDown />}
                    </NavLink>

                    {/* Sub-menu (Dropdown) */}
                    <AnimatePresence>
                        {nav.children && openDropdown === nav.id && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 mt-2 w-40 bg-white shadow-md border border-gray-200 rounded-md z-50 overflow-hidden"
                            >
                                {nav.children.map((sub, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={sub.url}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-greeny hover:text-white transition-all duration-200"
                                        >
                                            {sub.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;
