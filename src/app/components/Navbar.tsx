"use client";

import Link from "next/link";
import SearchInput from "./SearchInput";
import { AiFillPlusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { usePathname } from "next/navigation";

const menu = [
    {
        href: "/new",
        icon: <AiOutlinePlusSquare />,
        clickedIcon: <AiFillPlusSquare />,
        title: "추가하기",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="flex justify-between px-5 py-3 bg-slate-500">
            <Link href={"/"}>Home</Link>
            <SearchInput />
            <nav>
                <ul className="flex">
                    {menu.map(({ href, icon, clickedIcon, title }) => {
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-label={title}
                                    className="flex items-center "
                                >
                                    {pathname === href ? clickedIcon : icon}
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
