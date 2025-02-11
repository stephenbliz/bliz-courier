'use client';
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
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
        <header
            className={`${openMenu && 'h-[50vh]'} mb-8 shadow-2xl shadow-shadowColor fixed top-0 transition duration-300 ease-linear left-0 w-[100vw] px-[5%] py-[1.5rem] h-[5rem] md:h-[5rem] bg-whiteColor`}
        >
            <nav 
                className="flex items-center justify-between"
            >
                <div
                    className="md:w-[20%] text-primaryColor font-bold uppercase md:text-2xl"
                >
                    <Link
                        href='/'
                    >
                        blizcourier
                    </Link>
                </div>
                <ul
                    className={`${openMenu ? 'block': 'hidden'} absolute md:relative md:flex items-center top-[6rem] md:top-0 justify-between md:w-[70%]`}
                >
                    {
                        navLinks.map((navLink)=>(
                            <li
                                key={navLink.id}
                                onClick={()=>setOpenMenu(false)}
                                className={`${navLink.path === pathname ? 'text-primaryColor border-b border-primaryColor':'text-headerColor'} ${openMenu ? 'mb-6': 'mb-0'} uppercase w-fit text-sm font-bold hover:text-primaryColor hover:border-b border-primaryColor transition duration-300 ease-linear`}
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
                <span
                    className="md:hidden block text-4xl w-fit text-headerColor"
                    onClick={handleOpenMenu}
                >
                    {openMenu ? <IoMdClose /> : <IoMdMenu />}
                </span>
            </nav>
        </header>
    )
}