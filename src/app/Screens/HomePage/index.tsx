import Image from 'next/image';
import React from 'react';
import background_home from "../../../assets/background_home.jpg";
import logo_esq from "../../../assets/esq_transparente.png";
const HomePage: React.FC = () => {
    return (
        <section className="relative w-full md:h-[50vh] flex justify-center items-center">
            <figure className="absolute inset-0 -z-10">
                <Image
                    src={background_home}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </figure>

            <div className="h-full md:h-[50vh] flex flex-col lg:flex-row items-center justify-center relative z-10 bg-white/50 p-4 rounded-lg shadow-lg w-full">
                <Image
                    className="w-40 md:w-60"
                    src={logo_esq}
                    alt="Lâmpada"
                    priority />
                <h1 className="text-3xl md:text-5xl font-bold text-blue_d p-2">Sua escola pode brilhar!</h1>
            </div>
        </section>
    );
}

export default HomePage;