"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import logo_esq from "../../assets/esq_transparente.png";
export interface INavbarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    setIsOpen: (value: boolean) => void;
}

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} w-full md:h-auto top-0 left-0 bg-white text-black flex flex-col md:flex-row align-center items-center p-4`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-8 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-8 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>

            <Link
                className={`${!isOpen ? "hidden md:block" : ""} w-21 h-22 md:w-12 md:h-12`}
                href={"/"}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src={logo_esq}
                    alt="Background"
                    objectFit="cover"
                    priority
                />
            </Link>

            <nav className="w-[100%] h-[100%] text-[18px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Início
                </Link>
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#solucoes"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Soluções
                </Link>
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#quem-somos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Quem somos
                </Link>
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#parcerias"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Parcerias
                </Link>
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#depoimentos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Depoimentos
                </Link>
                <Link
                    className={`hover:text-blue_d font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"#contatos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contatos
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
