import Link from "next/link"

export default function Footer(){
    const quickLinks = [
        {name: 'sitemap', path: '#', id:1},
        {name: 'pricing', path: '#', id:2},
        {name: 'payment method', path: '#', id:3},
        {name: 'support', path: '#', id:4},
    ];

    const importantLinks = [
        {name: 'about', path: '/about', id:1},
        {name: 'tracking', path: '/tracking', id:2},
        {name: 'contact', path: '/contact', id:3},
        {name: 'blog', path: '/blog', id:4},
    ]

    return(
        <footer
            className=" bg-headerColor mt-[5rem]"
        >
            <div
                className="md:grid grid-cols-3 px-[5%] border-b border-gray-600 gap-2 items-center py-[3rem] md:py-[5rem]  text-whiteColor uppercase"
            >
                <div
                    className="md:text-xl md:col-span-2 lg:col-span-1 mb-8 lg:mb-0 font-headerFont text-primaryColor font-bold"
                >
                    <Link
                        href='/'
                    >
                        blizcourier
                    </Link>
                </div>
                <div
                    className="md:col-span-2 mb-8 lg:mb-0 lg:col-span-1 uppercase"
                >
                    <h3
                        className="font-bold lg:mb-8 mb-6 font-headerFont"
                    >
                        quick links
                    </h3>
                    <ul>
                        {
                            quickLinks.map((quickLink)=>(
                                <li
                                    key={quickLink.id}
                                    className="text-sm mb-4 hover:text-primaryColor transition duration-300 ease-linear"
                                >
                                    <Link
                                        href={quickLink.path}
                                    >
                                        {quickLink.name}
                                    </Link>
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>
                <div
                    className="md:col-span-2 lg:col-span-1 uppercase"
                >
                    <h3
                        className="font-bold lg:mb-8 mb-6 font-headerFont"
                    >
                        important links
                    </h3>
                    <ul>
                        {
                            importantLinks.map((importantLink)=>(
                                <li
                                    key={importantLink.id}
                                    className="text-sm mb-4 hover:text-primaryColor transition duration-300 ease-linear"
                                >
                                    <Link
                                        href={importantLink.path}
                                    >
                                        {importantLink.name}
                                    </Link>
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div
                className="px-[5%] py-[2rem] text-gray-400 text-sm"
            >
                &copy; {new Date().getFullYear()} Blizcourier. All rights reserved.
            </div>
        </footer>
    )
}