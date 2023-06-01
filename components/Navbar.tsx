import React, { useState, useContext } from "react"
import { CrowdFundingContext } from "context/CrowdFunding"
import { Logo, Menu } from "components/index"
import Link from "next/link"

const Navbar = () => {
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuList = ["Litepaper", "Project", "Donations", "Members"];

    return (
        <nav className="fixed top-0 right-0 left-0 w-full border-b-[1px] border-gray-300">
            <div className="mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] 2xl:max-w-screen-xl">
                <div className=" flex items-center justify-between h-[100px]">
                    <div className="flex items-center">
                        <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                            <Logo color="text-black" />
                            <h3 className="ml-2 hover:text-teal-900 duration-500">Web3 Giving</h3>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="items-center hidden space-x-8 lg:flex">
                            {menuList.map((element,i) => (
                                <li key={i + 1}>
                                    <Link href={'/'} aria-label="Our Product" title="Our Product">
                                        <p className="font-normal hover:text-teal-900 duration-500">{element}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="inline-flex items-center gap-2">
                        {!currentAccount && (
                            <ul className="items-center hidden space-x-8 lg:flex">
                                <li>
                                    <button 
                                        onClick={() => connectWallet()}
                                        className="inline-flex items-center justify-center h-12 px-6 text-off-white duration-500 rounded shadow-md bg-primary-black hover:bg-teal-900 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign-up"
                                        title="Sign up"
                                    >
                                        Connect Wallet
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="lg:hidden flex z-40">
                        <button
                            aria-label="Open menu"
                            title="open menu"
                            className="p-2 -mr-1 duration-200 rounded focus:outline-none focus:shadow"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu color="text-black" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 right-0 w-full p-5 px-10 bg-off-white border border-gray-300 rounded">
                                <div className="">
                                    <div className="flex items-center justify-between mb-5">
                                        <div>
                                            <Link
                                                href={'/'}
                                                aria-label="Company"
                                                title="company"
                                                className="inline-flex items-center gap-2"
                                            >
                                                <Logo color="text-black" />
                                                <h3>Web3 Giving</h3>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="close menu"
                                                title="close menu"
                                                className="p-4 px-5 duration-200 rounded hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                                                    <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center text-center mb-5">
                                    <ul className="space-y-4">
                                        {menuList.map((element, i) => (
                                            <li key={i + 1}>
                                                <Link
                                                    href={'/'}
                                                    aria-label="our product"
                                                    title="our product"
                                                >
                                                    <p className="font-normal">{element}</p>
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link
                                                href={'/'}
                                                aria-label=""
                                                className="inline-flex items-center justify-center bg-primary-black h-12 px-6 duration-200 rounded shadow-md"
                                            >
                                                <h3 className="tracking wide text-off-white">Connect Wallet</h3>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar