'use client';
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { headerVariant } from "../Utils/animations";
import { useState } from "react";

export default function Header(){
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    const navLinks = [
        {name: 'home', path: '/', id:1},
        {name: 'about', path: '/about', id:2},
        {name: 'tracking', path: '/tracking', id:3},
        {name: 'pricing', path: '/pricing', id:4},
        {name: 'contact', path: '/contact', id:5},
        {name: 'news', path: '/news', id:6},
    ];

    const handleOpenMenu = ()=>{
        setOpenMenu(!openMenu);
    }

    return(
        <motion.header
            variants={headerVariant}
            initial='hidden'
            animate={openMenu? 'visible' : 'hidden'}
            className={`mb-8 overflow-hidden shadow-2xl transition-all  shadow-shadowColor fixed top-0 duration-300 ease-linear left-0 w-[100vw] py-[1.5rem] md:py-0 px-[5%] md:h-[5rem] bg-whiteColor`}
        >
            <nav 
                className="flex items-center justify-between flex-wrap font-headerFont"
            >
                <div
                    className="md:w-[20%] text-primaryColor uppercase font-bold md:text-xl"
                >
                    <Link
                        href='/'
                    >
                        blizcourier
                    </Link>
                </div>
                <span
                    className="md:hidden text-4xl w-fit text-headerColor"
                    onClick={handleOpenMenu}
                >
                    {openMenu ? <IoMdClose /> : <IoMdMenu />}
                </span>
                <ul
                    className={` transition-all duration-300 md:py-[1.5rem] ease-linear md:flex items-center justify-between w-full h-[60vh] mt-8 md:mt-0 md:h-[5rem] md:w-[70%]`}
                >
                    {
                        navLinks.map((navLink)=>(
                            <li
                                key={navLink.id}
                                onClick={()=>setOpenMenu(false)}
                                className={`${navLink.path === pathname ? 'text-primaryColor border-b border-primaryColor':'text-headerColor'} mb-6 uppercase font-headerFont font-semibold md:mb-0 w-fit text-[0.85rem]  hover:text-primaryColor hover:border-b border-primaryColor transition duration-300 ease-linear`}
                            >
                                <Link
                                    href={navLink.path}
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </motion.header>
    )
}