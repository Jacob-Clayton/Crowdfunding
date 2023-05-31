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
                <div className="relative flex items-center justify-between h-[100px]">
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
                                        <p className="hover:text-teal-900 duration-500">{element}</p>
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
                    <Menu color="text-black" />
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar