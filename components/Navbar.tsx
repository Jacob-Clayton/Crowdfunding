import React, { useState, useContext } from "react"
import { CrowdFundingContext } from "context/CrowdFunding"
import { Logo, Menu } from "components/index"
import Link from "next/link"

const menuList = ["Litepaper", "Project", "Donations", "Members"];

type MobileNavProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({open, setOpen} :MobileNavProps) {
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext);

    return (
        <div className={`absolute top-0 w-[70%] p-5 px-10 bg-slate-100 border border-gray-300 shadow rounded-bl-xl ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-200 ease-in-out`}>
            <div className="flex items-center justify-end">
                <button
                    aria-label="close menu"
                    title="close menu"
                    className="py-4 duration-200 rounded hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                    onClick={() => setOpen(false)}
                >
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                        <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="flex justify-center text-center mb-10">
                <ul className="space-y-4">
                    {menuList.map((element, i) => (
                        <li key={i + 1}>
                            <Link
                                href={'/'}
                                aria-label="our product"
                                title="our product"
                                onClick={() => setOpen(false)}
                            >
                                <p className="font-normal">{element}</p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={'/'}
                            aria-label="sign-up"
                            title="sign up"
                            onClick={() => connectWallet()}
                            className="inline-flex items-center justify-center bg-primary-black h-12 px-6 duration-200 rounded shadow-md"
                        >
                            <h3 className="tracking wide text-off-white">Connect Wallet</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const Navbar = () => {
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 right-0 left-0 w-full border-b-[1px] border-gray-300 bg-slate-100">
            <div className="mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] 2xl:max-w-screen-xl">
                <div className=" flex items-center justify-between h-[100px]">
                    <div className="flex items-center">
                        <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                            <Logo color="text-black" />
                            <h3 className="ml-2 tracking-wide">Web3 Giving</h3>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="items-center hidden space-x-8 lg:flex">
                            {menuList.map((element,i) => (
                                <li key={i + 1}>
                                    <Link href={'/'} aria-label="Our Product" title="Our Product">
                                        <p className="font-normal">{element}</p>
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
                                        className="inline-flex items-center justify-center h-12 px-6 duration-500 rounded hover:shadow-md bg-primary-black hover: focus:shadow-outline focus:outline-none"
                                        aria-label="Sign-up"
                                        title="Sign up"
                                    >
                                        <p className="text-off-white">Connect Wallet</p>
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
                            onClick={() => setOpen(!open)}
                        >
                            <Menu color="text-black" />
                        </button>
                        <MobileNav open={open} setOpen={setOpen} />
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar